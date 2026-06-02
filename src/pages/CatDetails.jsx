import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import catPlaceholder from "../assets/cat_placeholder.jpg";
import { useCart } from "../context/CartContext";
import { Button, Row, Col } from "react-bootstrap";

function CatDetails() {
  const { id } = useParams();
  console.log(id);
  const [cat, setCat] = useState(null);
  const { addToCart, removeFromCart, cartItems } = useCart();

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
      });
  }, [id]);

  if (!cat) return <p>Laddar...</p>;
  const inCart = cartItems.some((item) => item.id === cat.id);

  return (
    <div className="container text-left mt-5">
      <h1 className="display-3">Cat Details</h1>
      <Row>
        <Col md={6}>
          <img
            style={{ width: "100%" }}
            src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
            onError={(e) => (e.target.src = catPlaceholder)}
            alt={cat.name}
          />
        </Col>
        <Col md={6}>
          <h2>{cat.name}</h2>
          <p>{cat.origin}</p>
          <Button
            variant={inCart ? "danger" : "primary"}
            onClick={() => (inCart ? removeFromCart(cat) : addToCart(cat))}
          >
            {inCart ? "Remove from cart" : "Add to cart"}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CatDetails;
