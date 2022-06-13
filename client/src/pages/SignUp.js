import React, {useState} from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import {useMutation} from '@apollo/client'
import {ADD_USER} from '../utils/mutations'
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



const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
return (
<div style={styles.rectangleShape}>
<Form className="mt-5" onSubmit={handleFormSubmit}>
  <Col xs={7} md={{ span: 4, offset: 4 }}>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={formState.firstName} onChange={handleChange} />
    </Form.Group>
    </Col>
    
    <Col xs={7} md={{ span: 4, offset: 4 }}>
    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={formState.lastName}  onChange={handleChange}/>
    </Form.Group>
    </Col>
    
    <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type= "email" name="email"placeholder="Email" value={formState.email} onChange={handleChange}/>
  </Form.Group>
  </Col>
  <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name="username" placeholder="Username" value={formState.username} onChange={handleChange}/>
  </Form.Group>
  </Col>
  <Col xs={7} md={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" value={formState.password} onChange={handleChange}/>
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