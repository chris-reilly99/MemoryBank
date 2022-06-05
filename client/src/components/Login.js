import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Login () {
return (

<Form className="mt-5">
  <Form.Group className="mb-3" controlId="formGroupUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter Username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>


)


};

export default Login;