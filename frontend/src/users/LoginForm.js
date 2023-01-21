import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";

function LoginForm() {
  const history = useHistory();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // const response = await fetch(`http://localhost:5000/authentication/`, {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/`, 
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
      setCurrentUser(data.user)
      localStorage.setItem('token', data.token)
      history.push(`/places`)
    } else {
      setErrorMessage(data.message)
    }
  }

  return (
    <div className="bg-Img">
      <main>
        <h1 style={{ color: "black" }}>Sign-in</h1>

        {errorMessage !== null ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}

        <Alert variant="warning">
          <Alert.Heading>Please enter credentials</Alert.Heading>
          <p>
          To start writing, users must have an account and be signed-in.
          </p>
        </Alert>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              required 
              type="email" 
              value={credentials.email} 
              onChange={ e => setCredentials( { ...credentials, email: e.target.value })}
              placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We will never sell or share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              type="password" 
              value={credentials.password} 
              onChange={ e => setCredentials( { ...credentials, password: e.target.value })}
              placeholder="Enter Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <div className="text-center">
            <Button variant="dark" type="submit">Sign-in</Button>
          </div>
        </Form>
      </main>
    </div>
  );
}
export default LoginForm;