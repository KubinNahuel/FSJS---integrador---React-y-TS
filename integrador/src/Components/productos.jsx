import React from 'react'
import { Stock } from '../data/data'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

   export const Remera=()=>{
        return(
            <>
             <div className='tituloP'>
            <h1>REMERAS</h1>
            </div>
            <CardGroup className='card-container'>
                    {Stock.map((element,index) => {
                        if(element.tipo==="remeras"){
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
   }})}
            </CardGroup>
            </>
        )
    }       

    export const Pantalon=()=>{
        return(
            <>
            <div className='tituloP'>
            <h1>PANTALONES</h1>
            </div>
            <CardGroup className='card-container'>
                {Stock.map((element,index) => {
                        if(element.tipo==="pantalones"){
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
    }})}
            </CardGroup>
            </>
        )
    }
    export const Bota=()=>{
        return(
            <>
             <div className='tituloP'>
            <h1>BOTAS</h1>
            </div>
            <CardGroup className='card-container'>
            {Stock.map((element,index) => {
                        if(element.tipo==="botas"){
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
    }})}
            </CardGroup>
            </>
        )
    }              
