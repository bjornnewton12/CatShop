import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CatCard from "../components/CatCard";
import { useCart } from "../context/CartContext";

function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <div className="container text-left mt-5">
      <h1 className="display-3 mb-4">Shopping cart</h1>
      {cartItems.map((cat, index) => (
        <div key={index}>
          <Row className="g-4 mb-4">
            <Col xs={12} sm={6} md={4} lg={3}>
              <CatCard cat={cat} />
            </Col>
          </Row>
        </div>
      ))}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Checkout
        </Button>
      </Form>
    </div>
  );
}

export default ShoppingCart;
