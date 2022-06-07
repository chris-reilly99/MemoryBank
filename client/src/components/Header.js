import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="Primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Emotional Memories Diary</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><Link to={"/SignUp"}>Sign Up</Link> </Nav.Link>
      
        <Nav.Link><Link to={"/Login"}>Login</Link></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;
