import React from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.scss";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">
        <img src={Logo} alt="logo" width={120} height={120} /> HNNDES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-sm`}
        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ color: "#FF6C18", fontSize: "36px" }}
            id={`offcanvasNavbarLabel-expand-sm`}
          >
            <img src={Logo} alt="logo" width={120} height={120} /> HNNDES
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <a href="/" className={"nav-Link mx-2"}>
              Home
            </a>
            <Link to="/services" className={"nav-Link mx-2"}>
              Services
            </Link>
            <a href="#about" className={"nav-Link mx-2"}>
              About Us
            </a>
            <a href="#contact" className={"nav-Link mx-2"}>
              Contact
            </a>
            <a href="#customer" className={"nav-Link mx-2"}>
              Happy Customer
            </a>
          </Nav>
          <Link to="/login">
            <Button variant="outline-dark">Login</Button>
          </Link>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default MainNavbar;
