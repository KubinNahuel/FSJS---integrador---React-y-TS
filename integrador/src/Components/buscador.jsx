import React, { useState } from "react";
import { Stock } from "../data/data";
import NavScrollExample from "./navBar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { GenerarCard } from "./card";
import { useParams } from "react-router-dom";




 export function ResB(){
 const {id}=useParams()
    return(
      <>
      <CardGroup>
      {Stock.map((element,index)=>{
         if(id.toLowerCase()==element.marca.toLowerCase()){
            return(
               <GenerarCard index={index} imagen={element.imagen} marca={element.marca} descripcion={element.descripcion} item={element} price={element.price}/>
            )
         }

      })}
      </CardGroup>
   </>
   )
} 
   