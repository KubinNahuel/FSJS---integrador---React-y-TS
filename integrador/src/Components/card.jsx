import { Link } from "@mui/material";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";




export function GenerarCard(props) {
 
 
  const{addItem}=useCart()
  return (
    <>
        <Card.Body key={props.index}>
          <Card.Img className="imagen-card" src={props.imagen} />
          <Card.Title>{props.marca}</Card.Title>
          <Card.Text>{props.descripcion}</Card.Text>
          <p><small className="text-muted">${props.price}</small></p>
          <Card.Footer>
            <button type="button" className="comprar" onClick={()=>addItem(props.item)}>
              Comprar
            </button>
          </Card.Footer>
        </Card.Body>
    </>
  );
}
