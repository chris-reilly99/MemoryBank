import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function AfterLogin () {
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
          <Nav.Link href="#action1">Sign Out</Nav.Link>
  
        </Nav>
        <Nav.Link href="#action2">Commit New Memory</Nav.Link>
          <Nav.Link href="#action2">View Friends' Memories</Nav.Link>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Recall Memory"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>


)

};

export default AfterLogin;