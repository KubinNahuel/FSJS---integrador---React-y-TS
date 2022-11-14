import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavScrollExample(props) {

   
  function cambiarTipo(){
    props.setCategoria("Landing");
   }

  return (
    <Navbar className="colorNav"  s>
      <Container fluid>
        <Navbar.Brand href="#" onClick={cambiarTipo}>Mercado Libre</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={cambiarTipo}>Home</Nav.Link>
          </Nav>

         
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default NavScrollExample