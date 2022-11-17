import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useUserContext, useUserToggleContext } from "../context/userProvider";



function NavScrollExample() {
  
  const user= useUserContext()
  const cambiaLogin=useUserToggleContext()

  return (
    <Navbar className="colorNav" s>
      
      <Container fluid>
        <Link to="/">
          <Navbar.Brand to="/">Mercado Libre</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
        {user ? <><Navbar.Brand className="nombreL">{user.name} {user.years}</Navbar.Brand> <Link to="/"><Navbar.Brand href="/" onClick={cambiaLogin}>Salir</Navbar.Brand></Link> </>: <Link to="/Login"><Navbar.Brand href="/">Ingresar</Navbar.Brand></Link>}
          
        <Link to="/Carrito">Carrito</Link>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
