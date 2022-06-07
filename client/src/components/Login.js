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


function Login () {
return (
<div style={styles.rectangleShape}>
<Form className="mt-5">
    <Col xs={7} md={{ span: 4, offset: 4 }}>
        <Form.Group className="mb-3" controlId="formGroupUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter Username" />
  </Form.Group>
    </Col>
    <Col xs={7} md={{ span: 4, offset: 4 }}>
       <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
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

export default Login;