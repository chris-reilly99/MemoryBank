import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../styles/Header.css';

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
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function CardA(props) {
  return (
   
<Card className="bg-dark text-white">
  <Card.Img src="https://d3d127vhjgkwcw.cloudfront.net/images/articles/2020_12/positive_mental_attitude_fb.jpg" alt="Card image" />
  </Card>
  


      
  );
}



export default CardA;

/* <Card border="danger" style={{ width: '18rem' }}>
<Card.Header>Header</Card.Header>
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
  {props.text}
  </Card.Text>
</Card.Body>
</Card> */