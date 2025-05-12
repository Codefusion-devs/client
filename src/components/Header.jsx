import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="bg-dark w-100">
      <Container fluid>
        <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              className="me-2 mb-2 mb-lg-0"
              href="/login"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              className="mb-2 mb-lg-0"
              href="/register"
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
