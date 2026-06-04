import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCart } from "../context/CartContext";
import logo from "../assets/CatShop_Logo.svg";

function NavBar() {
  const { cartItems } = useCart();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt="Cat Shop Logo"
                src={logo}
                height="25"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cats">
              Cats
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about-us">
              About us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shopping-cart">
              Shopping cart ({cartItems.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
