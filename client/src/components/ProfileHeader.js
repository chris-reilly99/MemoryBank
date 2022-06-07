import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function ProfileHeader() {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Emotional Memories Diary</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

      </Nav>
      <Nav.Link href="#action2">Commit New Memory</Nav.Link>
        <Nav.Link href="#action2">View Friends' Memories</Nav.Link>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Recall Memory</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default ProfileHeader;