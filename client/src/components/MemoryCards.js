import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
// import '../styles/Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
  color: {
    background: '#3f51b5',
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function MemoryCards(props) {
  return (

    <div class="mt-5">
            <Card bg='info'>
              <Card.Header as="h5">{props.title}</Card.Header>
              <Card.Body>
                <Card.Title> {props.CardDate}</Card.Title>
                <Card.Text>
                  {props.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

      );
};



      export default MemoryCards;

/* <Card border="danger" style={{ width: '18rem' }}>
<Card.Header>Header</Card.Header>
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
  {props.text}
  </Card.Text>
</Card.Body>
</Card> */