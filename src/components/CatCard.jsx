import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import catPlaceholder from "../assets/cat_placeholder.jpg";

function CatCard({ cat }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        style={{ objectFit: "cover", aspectRatio: "4/3" }}
        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
        onError={(e) => (e.target.src = catPlaceholder)}
        alt={cat.name}
      />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>{cat.origin}</Card.Text>
        <Link to={`/cats/${cat.id}`}>
          <Button variant="primary">Learn more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
