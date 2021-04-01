import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from '../../icons/Avatar face.png';
import "./Header.css";

const Header = () => {
  return (

    <Navbar className="fixed-top" bg="transparent" expand="lg">
        <Container>

            <Navbar.Brand as={Link} className="web-name" style={{fontSize: '25px'}} to="/"> FRESH VALLEY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    <Nav.Link as={Link} to="#">Deals</Nav.Link>
                    <Nav.Link as={Link} to="/login" className="active px-4 login-style">Login</Nav.Link>
                    {/* <Nav.Link as={Link} to="/"><img className="logo-style " src={logo} alt=""/></Nav.Link> */}

                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
    

  );
};

export default Header;
