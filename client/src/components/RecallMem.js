// import React from 'react';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
// Here we are importing a CSS file as a dependency
// import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';

function RecallMem() {
  return (
    
    <div>
        <Col xs={7} md={{ span: 5, offset: 9 }}>
      <form className="bucket-form mt-3">
        <input
          type="text"
          placeholder="Enter a Keyword"
        //   value={input}
          name="text"
          className="bucket-input"
        //   onChange={handleChange}
        ></input>
        <button className="bucket-button">Recall Memory</button>
      </form>
      </Col>
    </div>
    
  );
}

export default RecallMem;