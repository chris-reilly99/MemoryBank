import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';


const styles = {
  rectangleShape: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0px 10px',
  
  },
};



function SignUp () {
return (
<div style={styles.rectangleShape}>
<Form className="mt-5">
  <Col xs={7} md={{ span: 4, offset: 4 }}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="First Name" placeholder="Enter First Name" />
    </Form.Group>
    </Col>
    
    <Col xs={7} md={{ span: 4, offset: 4 }}>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="Last Name" placeholder="Enter Last Name" />
    </Form.Group>
    </Col>
    
  
  <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Username</Form.Label>
    <Form.Control placeholder="Username" />
  </Form.Group>
  </Col>
  <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Password</Form.Label>
    <Form.Control placeholder="Password" />
  </Form.Group>
  </Col>
  <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Col>
</Form>
</div>


)


};

export default SignUp;