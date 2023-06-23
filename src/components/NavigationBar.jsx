import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" className="text-decoration-none">React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-decoration-none mx-2 text-dark" to="/">Home</Link>
            <Link className="text-decoration-none mx-2 text-dark" to="/about">About</Link>
            <Link className="text-decoration-none mx-2 text-dark" to="/products">Products</Link>
            { isUserLoggedIn ? <Link className="text-decoration-none mx-2 text-dark" to="#">Logout</Link> :  <Link className="text-decoration-none mx-2 text-dark" to="/login">Login</Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
