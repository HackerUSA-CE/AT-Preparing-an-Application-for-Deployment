import { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";

function NewPlaceForm() {
  const history = useHistory();

  const [place, setPlace] = useState({
    name: '',
    pic: '',
    city: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // await fetch(`http://localhost:5000/places`, {
    await fetch(`${process.env.REACT_APP_SERVER_URL}places`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });

    history.push("/places");
  }

  return (
    <div className="bg-Img3">
      <main>
        <h1 style={{ color: "black" }}>Add a new post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPlaceName">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              required
              value={place.name} 
              onChange={ e=> setPlace({ ...place, name: e.target.value }) }
              placeholder="Enter Name of Place" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPlacePicture">
            <Form.Label>Image</Form.Label>
            <Form.Control 
              required 
              value={place.pic} 
              onChange={ e => setPlace( { ...place, pic: e.target.value })}
              placeholder="Add Picture" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiCuisines">
            <Form.Label>Post</Form.Label>
            <Form.Control 
              required
              value={place.city} 
              onChange={ e => setPlace( { ...place, city: e.target.value })}
              placeholder="Add Post" />
          </Form.Group>

          <div className="text-center">
            <Button variant="dark" type="submit" value="Add post">Add post</Button>
          </div>
        </Form>
      </main>
    </div>
  );
}

export default NewPlaceForm;