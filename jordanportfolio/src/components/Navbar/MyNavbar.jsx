import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

export default function MyNavbar() {
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">Jordan O'Neal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
