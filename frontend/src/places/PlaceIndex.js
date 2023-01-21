import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function PlaceIndex(data) {
  const history = useHistory();

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
      <div className="col-sm-6" key={place.placeId}>
        <h2>
          <a href="#" onClick={() => history.push(`/places/${place.placeId}`)}>
            {place.name}
          </a>
        </h2>
        <img style={{ maxWidth: 200 }} src={place.pic} alt="blog image" />
        <p>{place.city}</p>
      </div>
    );
    
  });
  return (
    <main>
      <h1 style={{ color: "black" }}>Explore thoughts</h1>
      <div className="row-reverse">{placesFormatted}</div>
    </main>
  );
}

export default PlaceIndex;
