import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo-hm.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './header.css';
// import Router from "../../router/Routes";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="40"
              width="auto"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#features">PRODUCTS</Nav.Link>
              <Nav.Link href="#pricing">RENT ITEMS</Nav.Link>
              <Nav.Link href="#pricing">SERVICES</Nav.Link>
              <Nav.Link href="#pricing">RENT ITEMS</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-primary" id="Button">Sign in</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
