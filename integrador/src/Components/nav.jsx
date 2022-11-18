import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Stock } from "../data/data";
import { Link } from "react-router-dom";


function NavDropdownExample(props) {
 
  const [busqueda, setBusqueda] = useState("")
  const datos = e =>{
    e.preventDefault()
  }
  const cambiarState = e =>{
    console.log(e.target.value);
    setBusqueda(e.target.value);
    
}       
  
  
  

  
  return (
    <div className="sNav">
      <Nav variant="pills">
        <Nav.Item>
          <Link to="/Vender">
            <Nav.Link href="/">Vender</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Ofertas">
            <Nav.Link href="/" title="Item">
              Ofertas
            </Nav.Link>
          </Link>
        </Nav.Item>
        <NavDropdown title="Categorias" id="nav-dropdown">
          <Link to="/Remeras">
            <NavDropdown.Item href="/">Remeras</NavDropdown.Item>
          </Link>
          <Link to="/Pantalon">
            <NavDropdown.Item href="/"> Pantalones </NavDropdown.Item>
          </Link>
          <Link to="/Botas">
            <NavDropdown.Item href="/"> Botas</NavDropdown.Item>
          </Link>
        </NavDropdown>
        <Form className="d-flex" onSubmit={datos} >
          
          <Form.Control  type="search"  placeholder="Buscar..."  className="me-2 buscador"  aria-label="Search" onChange={cambiarState}
          />
          {/* <Link to="/Buscador"> */}
          <Link to={"/Buscador/"+busqueda}>
          <Button variant="outline-success" type="submit">Buscar</Button>
          </Link>
          {/* </Link> */}
        </Form>
      </Nav>
    </div>
  );
}

export default NavDropdownExample;
