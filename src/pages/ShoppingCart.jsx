import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CatCard from "../components/CatCard";
import { Modal } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ShoppingCart() {
  const { cartItems, clearCart } = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container text-left mt-5">
      <h1 className="display-3 mb-4">Shopping cart</h1>
      <Row className="g-4 mb-4">
        {cartItems.map((cat, index) => (
          <Col xs={12} sm={6} md={4} lg={3}>
            <CatCard cat={cat} />
          </Col>
        ))}
      </Row>

      <Button variant="primary" onClick={handleShow}>
        Proceed to checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="orderForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleClose();
              clearCart();
              alert("Thank you! Your cat/-s will arrive shortly.");
            }}
          >
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
            <Button type="submit" form="orderForm" variant="primary">
              Order
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShoppingCart;
