import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/CatShop_Logo.svg';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">
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
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/cats">Cats</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us">About us</Nav.Link>
                        <Nav.Link as={NavLink} to="/shopping-cart">Shopping cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;