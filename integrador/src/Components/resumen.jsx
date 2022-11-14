import React from "react";
import { Stock } from "../data/data";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function Resumen(){
    return(
        <>
         <div className='tituloP'>
        <h1>Todos los productos</h1>
        </div>
        <CardGroup className='card-container'>
            {Stock.map((element, index)=>{
                 return(
                    <Card.Body key={index}>
                        <Card.Img className='imagen-card'  src={element.imagen} />
                          <Card.Title>{element.marca}</Card.Title>
                          <Card.Text>{element.descripcion}</Card.Text>
                          <small className="text-muted">${element.precio}</small>
                          <Card.Footer>
                          <button type='button' className='comprar'>Comprar</button>
                        </Card.Footer>
                        </Card.Body>
        )
            })}
        </CardGroup>

        </>
    )
}