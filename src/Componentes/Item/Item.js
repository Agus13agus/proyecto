import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>tareas a realizara</Card.Title>
        <Card.Text>
          "Text"
        </Card.Text>
        <Card.Text>fecha de vencimiento</Card.Text> 
        <Card.Text>hora de vencimiento</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
  
}

export default Item;