import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';




function Login () {
return (

<Form className="mt-5">

    <Col xs={7}>
        <Form.Group className="mb-3" controlId="formGroupUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter Username" />
  </Form.Group>
    </Col>
    <Col xs={7}>
       <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    </Col>
   

</Form>



)


};

export default Login;