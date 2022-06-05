import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Login () {
return (

    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="Username" />
    </Col>
    <Col>
      <Form.Control placeholder="Password" />
    </Col>
  </Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


)


};

export default Login;