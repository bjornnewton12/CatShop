import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CatCard( {cat}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.name} />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>{cat.origin}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard