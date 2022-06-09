import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import {useMutation} from '@apollo/client'
import {LOGIN_USER} from '../utils/mutations'

import Auth from '../utils/auth'

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


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

return (
<div style={styles.rectangleShape}>
<Form className="mt-5" onsubmit ={handleFormSubmit}>
    <Col xs={7} md={{ span: 4, offset: 4 }}>
        <Form.Group className="mb-3" controlId="formGroupUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter Username" value={formState.email} onChange={handleChange} />
  </Form.Group>
    </Col>
    <Col xs={7} md={{ span: 4, offset: 4 }}>
       <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={formState.password} onChange={handleChange} />
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