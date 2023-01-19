import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import CommentCard from './CommentCard'
import NewCommentForm from "./NewCommentForm";

function PlaceDetails() {

	const { placeId } = useParams()

	const history = useHistory()

	const [place, setPlace] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			// const response = await fetch(`http://localhost:5000/places/${placeId}`)
			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places/${placeId}`)
			const resData = await response.json()
			setPlace(resData)
		}
		fetchData()
	}, [placeId])

	if (place === null) {
		return <h1>Loading</h1>
	}

	function editPlace() {
		history.push(`/places/${place.placeId}/edit`)
	}

	async function deletePlace() {
		// await fetch(`http://localhost:5000/places/${place.placeId}`, {
		await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}`, {
			method: 'DELETE'
		})
		history.push('/places')
	}

	async function deleteComment(deletedComment) {
		// await fetch(`http://localhost:5000/places/${place.placeId}/comments/${deletedComment.commentId}`, {
		await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}/comments/${deletedComment.commentId}`, {
			method: 'DELETE', 
			headers: {
				'Content-Type': 'application/json', 
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
		})

		setPlace({
			...place,
			comments: place.comments
				.filter(comment => comment.commentId !== deletedComment.commentId)
		})
	}

	async function createComment(commentAttributes) {
		// const response = await fetch(`http://localhost:5000/places/${place.placeId}/comments`, {
		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}/comments`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setPlace({
			...place,
			comments: [
				...place.comments,
				comment
			]
		})

	}



	let comments = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	let rating = (
		<h3 className="inactive">
			Not yet rated
		</h3>
	)
	if (place.comments.length) {
		let sumRatings = place.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / place.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = place.comments.map(comment => {
			return (
				<CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}


	return (
		<main>
				<div className="col-sm-6">
				</div>
				<div className="col-sm-6">
					<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
					<h1>{place.name}</h1>
					<h3>
						{place.city}
					</h3>
				</div>
			<hr />
			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>
			<hr />
			<NewCommentForm
				place={place}
				onSubmit={createComment}
			/>
		</main>
	)
}

export default PlaceDetails