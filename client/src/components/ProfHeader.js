import React from 'react';
// Here we are importing a CSS file as a dependency
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';

function ProfHeader() {
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

export default ProfHeader;