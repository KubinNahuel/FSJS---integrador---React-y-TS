import React, { useState } from "react";
import { Stock } from "../data/data";
import NavScrollExample from "./navBar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


// export function ResB(){
//     const [busqueda, setBusqueda] = useState("")
//     Stock.map((element)=>{
//         if(element.tipo.toLowerCase==busqueda.toLowerCase || element.marca.toLowerCase==busqueda.toLowerCase){
//           return(
//             <CardGroup className='card-container'>
//                             <Card.Body >
//                                 <Card.Img className='imagen-card'  src={element.imagen} />
//                                   <Card.Title>{element.marca}</Card.Title>
//                                   <Card.Text>{element.descripcion}</Card.Text>
//                                   <small className="text-muted">${element.precio}</small>
//                                   <Card.Footer>
//                                   <button type='button' className='comprar'>Comprar</button>
//                                 </Card.Footer>
//                                 </Card.Body>
                
   
//             </CardGroup>
//           )

//         }
//       })
//     return(
//     <>

//     </>
//     )
// }
