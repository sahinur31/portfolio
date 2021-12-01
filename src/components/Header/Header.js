import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import Slide from 'react-reveal/Slide';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Slide left>
          <Navbar.Brand href="#home">NUR</Navbar.Brand>
          </Slide>
          <Navbar.Toggle />
          <Slide right>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} style={{color:"white"}} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} style={{color:"white"}} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} style={{color:"white"}} to="/home#projects">
              Projects
            </Nav.Link>
            <Nav.Link as={HashLink} style={{color:"white"}} to="/home#blog">
              Blog
            </Nav.Link>
            <Nav.Link as={HashLink} style={{color:"white"}} to="/home#contact">
              Contact
            </Nav.Link>
          </Navbar.Collapse>
          </Slide>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
