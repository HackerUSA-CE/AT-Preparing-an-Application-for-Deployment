import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";

function SignUpForm() {
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // await fetch(`http://localhost:5000/users/`, {
    await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    history.push(`/`);
  }

  return (
    <div className="bg-Img2">
      <main>
        <h1 style={{ color: "black" }}>Create Account</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstname" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I am not a robot" />
          </Form.Group>
          <div className="text-center">
            <Button variant="dark">Sign-up</Button>
          </div>
        </Form>
      </main>
    </div>
  );
}

export default SignUpForm;

{
  /* <main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
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
						  value={user.password}
						  onChange={e => setUser({...user, password: e.target.value })}
						  className="form-control"
						  id="password"
						  name="password"
						/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main> */
}
