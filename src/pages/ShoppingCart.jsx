import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCart } from "../context/CartContext"

function ShoppingCart() {
  const { cartItems } = useCart()
  return (

    <div className="container text-left mt-5">
      <h1 className="display-3">Shopping cart</h1>
      {cartItems.map((cat, index) => (
      <p key={index}>{cat.name}</p>))}
    
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
        <Form.Control type="text" placeholder="Enter address"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Checkout
      </Button>
    </Form>
    </div>
  );
}

export default ShoppingCart;
