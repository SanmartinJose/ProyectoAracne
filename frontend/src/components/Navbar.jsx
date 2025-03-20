import React from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { BsCart3, BsPersonCircle } from "react-icons/bs"; // Íconos de Carrito y Usuario
import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top me-2" />
        </Navbar.Brand>

        {/* Botón Toggle para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Catálogo</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Barra de búsqueda */}
          <Form className="d-flex me-3">
            <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
          </Form>

          {/* Ícono de Carrito */}
          <Nav className="me-3">
            <Nav.Link href="#" className="position-relative">
              <BsCart3 size={24} />
              {/* Indicador de cantidad de productos en el carrito */}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {/* Número de artículos en el carrito (dinámico en una app real) */}
              </span>
            </Nav.Link>
          </Nav>

          {/* Dropdown de Usuario */}
          <Nav>
            <NavDropdown title={<BsPersonCircle size={24} />} id="user-dropdown" align="end">
              <NavDropdown.Item href="#">Iniciar Sesión</NavDropdown.Item>
              <NavDropdown.Item href="#">Registrarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
