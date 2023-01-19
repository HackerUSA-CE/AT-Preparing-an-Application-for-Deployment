import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import backgroundpen from "../images/backgroundpen.jpg";
import "../css/custom.css";
// import { FormLabel } from "react-bootstrap";

function LoginForm() {
  const history = useHistory();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // const response = await fetch(`http://localhost:5000/authentication/`, {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}authentication/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser(data.user);
      localStorage.setItem("token", data.token);
      history.push(`/places`);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <div className="bg-Img">
      {/* <img
        className="img-fluid"
        src={backgroundpen}
        alt="backgroundpen"
        height="100vh"
      /> */}
      <main>
        <h1 style={{ color: "black" }}>Sign-In</h1>
        {errorMessage !== null ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We will never sell or share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div className="text-center">
            <Button variant="dark">Sign-In</Button>
          </div>
        </Form>
      </main>
    </div>
  );
}
export default LoginForm;

//<div>
//<img src="backgroundpen.jpg" alt="backgroundpen"></img>
//</div>;
// }
// {
/* <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        {/* <input className="btn btn-primary" type="submit" value="Sign-in" /> */
// }

//   {/* </form> */} */}
// {/* // </main> */}
// {
/* ); */
// }
// {
/* } */
// }
