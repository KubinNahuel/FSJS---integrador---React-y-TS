import React from "react";
import { Stock } from "../data/data";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import AdvancedExample from "./pagination";
import { GenerarCard } from "./card";


export function Resumen() {
  return (
    <>
      <div className="tituloP">
        <h1>Todos los productos</h1>
      </div>
      <CardGroup className="card-container">
        {Stock.map((item, index) => {
          return (
            <GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price}></GenerarCard>
          );
        })}
      </CardGroup>
      <AdvancedExample />
    </>
  );
}
