import { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";

function NewPlaceForm() {
  const history = useHistory();

  const [place, setPlace] = useState({
    name: "",
    pic: "",
    city: "",
    state: "",
    cuisines: "",
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
        <h1 style={{ color: "black" }}>Add A New Place</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPlaceName">
            <Form.Label>Place Name</Form.Label>
            <Form.Control type="placename" placeholder="Enter Name of Place" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicYearFounded">
            <Form.Label>Year Founded</Form.Label>
            <Form.Control type="yearfounded" placeholder="Enter Year Founded" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPlacePicture">
            <Form.Label>Place Picture</Form.Label>
            <Form.Control type="placepicture" placeholder="Add Picture" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" placeholder="Enter Name of City" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control type="state" placeholder="Enter Name of State" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiCuisines">
            <Form.Label>Cuisines</Form.Label>
            <Form.Control type="cuisine" placeholder="Enter Name of Cuisine" />
          </Form.Group>
          <div className="text-center">
            <Button variant="dark">Add Place</Button>
          </div>
        </Form>
      </main>
    </div>
  );
}

export default NewPlaceForm;

{
  /* <h1>Add a New Place</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Place Name</label>
          <input
            required
            value={place.name}
            onChange={(e) => setPlace({ ...place, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="founded">Year Founded</label>
          <input
            required
            value={place.founded}
            onChange={(e) => setPlace({ ...place, founded: e.target.value })}
            className="form-control"
            id="founded"
            name="founded"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pic">Place Picture</label>
          <input
            value={place.pic}
            onChange={(e) => setPlace({ ...place, pic: e.target.value })}
            className="form-control"
            id="pic"
            name="pic"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            value={place.city}
            onChange={(e) => setPlace({ ...place, city: e.target.value })}
            className="form-control"
            id="city"
            name="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            value={place.state}
            onChange={(e) => setPlace({ ...place, state: e.target.value })}
            className="form-control"
            id="state"
            name="state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisines">Cuisines</label>
          <input
            value={place.cuisines}
            onChange={(e) => setPlace({ ...place, cuisines: e.target.value })}
            className="form-control"
            id="cuisines"
            name="cuisines"
            required
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Add Place" />
      </form> */
}
