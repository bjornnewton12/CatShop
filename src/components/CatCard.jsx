import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import catPlaceholder from "../assets/cat_placeholder.jpg";

function CatCard({ cat, addToCart, removeFromCart, cartItems }) {
  const inCart = cartItems.some(item => item.id === cat.id)
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
        <Button
          variant={inCart ? "danger" : "primary"}
          onClick={() => inCart ? removeFromCart(cat) : addToCart(cat)}
        >
          {inCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
