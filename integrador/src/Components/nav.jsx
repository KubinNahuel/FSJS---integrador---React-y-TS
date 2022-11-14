import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { Stock } from '../data/data';



function NavDropdownExample(props) {
  
  const [prod, setProd] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const datos = e =>{
      e.preventDefault()
      
      Stock.map((element)=>{
        if(element.tipo==busqueda|| element.marca==busqueda){
          const Search= element
          setProd(Search)
          console.log(Search)
        }
      })
  }
  const cambiarState = e =>{
      setBusqueda(e.target.value)
      console.log(busqueda)
     
  }
  function cambiarTipo(e){
    props.setCategoria(e.target.textContent);
   }
  return (
    <div className='sNav'>
    <Nav variant="pills"  >
      <Nav.Item>
        <Nav.Link  href="#/home" onClick={cambiarTipo}>
          Vender
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  title="Item" onClick={cambiarTipo}>
          Ofertas
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categorias" id="nav-dropdown">
        <NavDropdown.Item onClick={cambiarTipo}>Remeras</NavDropdown.Item>
        <NavDropdown.Item onClick={cambiarTipo} >Pantalones</NavDropdown.Item>
        <NavDropdown.Item onClick={cambiarTipo} >Botas</NavDropdown.Item>
      </NavDropdown>
      <Form className="d-flex" onSubmit={datos} >
          <Form.Control type="search" placeholder="Buscar..." className="me-2" aria-label="Search" onChange={cambiarState}/>
          <Button variant="outline-success" type="submit"  >Buscar</Button>
      </Form>
    </Nav>
    </div>
  );
}

export default NavDropdownExample