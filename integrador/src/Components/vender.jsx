import React, { useReducer, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const initialState = {
  imagen: "",
  nombre: "",
  descripcion: "",
  precio: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CH_NOMBRE": {
      return {
        ...state,
        nombre: action.value,
      };
    }
    case "CH_DESCRIPCION": {
      return {
        ...state,
        descripcion: action.value,
      };
    }
    case "CH_PRECIO": {
      return {
        ...state,
        precio: action.value,
      };
    }
    case "CH_IMAGEN": {
      return {
        ...state,
        imagen: action.value,
      };
    }
  }
  return state;
};

function Vender() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stado, setStado] = useState({
    type: '',
    imagen: '',
    descripcion: '',
    price: '',
    role:1
  })
  const handleChange = (e) =>{
    setStado({
        ...stado,
        [e.target.name]:e.target.value
    })
    console.log(stado)
    }
  const handleSubmit =(e)=>{
    e.preventDefault();
    fetch('http://localhost:3030/api/post',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(stado)
    }).then((res)=>{
        res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    }
  return (
    <div className="cardVenderContainer">
      <div className="cardVender">
        <form
          name="formulario"
          method="post"
          action="/send.php"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Seleccione imagen del producto </label>
          <input
            type="file"
            name="imagen"
            accept=".jpg,.png"
            onChange={handleChange}
            
          />

          <div className="cardVenderBody">
            <label htmlFor="">Ingrese nombre del producto</label>
            <input
              type="text"
              name="type"
              
              onChange={
                handleChange
              }
            />
            <label htmlFor="">Ingrese descripcion del producto</label>
            <input
              type="text"
              name="descripcion"
             
              onChange={
                 handleChange
              }
            />
            <label>Ingrese Precio del producto</label>
            <input
              type="number"
              name="price"
              
              onChange={
                 handleChange
              }
            />
            <button type="submit">Mandar</button>
          </div>
        </form>
      </div>

      <div>
        <CardGroup className="card-container">
          <Card.Body>
            <Card.Img
              className="imagen-card"
              src="https://us.123rf.com/450wm/photoart23d/photoart23d1902/photoart23d190201517/117662503-marcas-de-verificaci%C3%B3n-icono-de-cruz-roja-degradado-ilustraci%C3%B3n-vectorial.jpg?ver=6"
            />
            <Card.Title>{state.nombre}</Card.Title>
            <Card.Text>{state.descripcion}</Card.Text>
            <small className="text-muted">${state.precio}</small>
            <Card.Footer>
              <button type="button" className="comprar">
                Vender
              </button>
            </Card.Footer>
          </Card.Body>
        </CardGroup>
      </div>
    </div>
  );
}

export default Vender;
