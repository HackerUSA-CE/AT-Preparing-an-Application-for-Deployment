import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlaceIndex(data) {
  const history = useHistory();
  const columnsPerRow = 3;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(`http://localhost:5000/places`) DO THIS WHEREVER THE FETCH TAKES PLACE!!!!
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places`);

      const resData = await response.json();
      setPlaces(resData);
    };
    fetchData();
  }, []);

  let placesFormatted = places.map((place) => {
      return (
          <Col>
          <Card style={{ 
            height: '25rem', 
            width: '18rem' }}>
              <Card.Img variant="top" src={place.pic} alt="blog image" />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text style={{textIndent: 100%Button, 
                  whiteSpace: "nowrap", 
                  overflow: "hidden"}}>
                    {place.city}
                </Card.Text>
                <Button variant="primary" onClick={ () => history.push(`/places/${place.placeId}` )}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
      )
  })
  
  return (
    <>
      <h1 style={{ color: "black" }}>Explore thoughts</h1>
      <Container>
        <Row xs={1} md={columnsPerRow}>
          {placesFormatted}
        </Row>
      </Container>
    </>
  );
}

export default PlaceIndex;
