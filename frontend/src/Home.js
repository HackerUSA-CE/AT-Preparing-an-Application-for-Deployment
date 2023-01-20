import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <main>
      <div>
        <h1 style={{ color: "black" }}>Welcome to The Inkwell</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxzdHJlZXQlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/1286140784/photo/sancocho.jpg?s=612x612&w=0&k=20&c=UPXD9bK_SIcbQje4pFhyfRUExziiti-JKOD_9t07k0U="
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1536521642388-441263f88a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1564956142890-3b3746211005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <a href="/places">
          <div className="text-center">
            <Button variant="dark">Posts Page</Button>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Home;

{
  /* <h1 style={{ color: "black" }}>Welcome to The Inkwell</h1>
      <div>
        <img
          height="300"
          width="500"
          src={process.env.REACT_APP_SERVER_URL + "images/chia-fruit-drink.jpg"}
          alt="Chia Fruit Shake"
        />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
          <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <div className="text-center">
          <Button variant="dark">Places Page</Button>
        </div>
        <button className="btn btn-primary">Places Page</button>
      </a> */
}
