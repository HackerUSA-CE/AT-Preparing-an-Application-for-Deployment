import { useEffect, useState, useContext} from "react";
import { useHistory, useParams } from "react-router"
import CommentCard from './CommentCard'
import NewCommentForm from "./NewCommentForm";
import { CurrentUser } from "../contexts/CurrentUser";

function PlaceDetails() {

	const { placeId } = useParams()

	const { currentUser } = useContext(CurrentUser)

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

	function showComment() {
		let commentActions
		if (currentUser) {
			commentActions = (
				<>
				  <NewCommentForm place={place} onSubmit={createComment}/>
				</>
			)
		} else {
			commentActions = (
				<></>
			)
		}
		return commentActions
	} 

	let commentBox = showComment()

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

	if (place.comments.length) {
	    comments = place.comments.map(comment => {
	    	return (
	    		<CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
	    	)
	    })
	}


	return (
		<main>			
			<div className="col-sm-6">
				<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
				<h3>{place.name}</h3>
				<h5>
					{place.city}
				</h5>
			</div>

			<hr />

			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>

			<hr />
			
			{commentBox}
		</main>
	)
}

export default PlaceDetails