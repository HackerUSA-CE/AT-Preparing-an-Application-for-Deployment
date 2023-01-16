import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    function logIn() {
        let loginActions
        if (currentUser) {
            loginActions = (
                <>
                  <li>Welcome back {currentUser.firstName} {currentUser.lastName}</li>
                </>
            ) 
        } else {
          loginActions = (
            <>Stay curious, discover stories ... </>
          )
        }
        return loginActions
    }

    let currentBanner = logIn()

    async function handleLogout(e) {
        e.preventDefault()
        localStorage.clear()
        currentBanner = logIn()
        history.push('/places')
    }
      
return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" onClick={() => history.push("/")}>The Inkwell </Navbar.Brand>
      
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            {currentBanner}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#" onClick={() => history.push("/places")}>
              Posts
          </Nav.Link>
          <Nav.Link href="#" onClick={() => history.push("/places/new")}>
              Add Post
          </Nav.Link>
          <NavDropdown title="Account">
            <NavDropdown.Item href="#" onClick={() => history.push("/login")}>Sign-in</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={handleLogout}>Sign-out</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={() => history.push("/sign-up")}>Create account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );

  }

export default Navigation;