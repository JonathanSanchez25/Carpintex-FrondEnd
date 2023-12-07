import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function CustomNavbar() {
  function exit() {
    localStorage.removeItem("rol");
    window.location.href = "/login";
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../public/assets/images/logo.png"
            alt=""
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-light">
            <Nav.Link as={Link} to="/inicio" className="text-light">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" className="text-light">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/conocenos" className="text-light">
              Conocenos
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito" className="text-light">
              <span className="text-white badge rounded-pill badge-notification bg-danger">
                Compras
              </span>
              <FaShoppingCart />
            </Nav.Link>
            {localStorage.getItem("rol") ? (
              <>
                <Nav.Link as={Link} to="/pedidos" className="text-light">
                  Pedidos
                </Nav.Link>
                <Nav.Link style={{ cursor: "pointer" }}>
                  <FaSignOutAlt onClick={exit} />
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-light">
                <FaUser size="1em" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
