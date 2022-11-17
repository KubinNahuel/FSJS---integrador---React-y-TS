import React from "react";
import { Stock } from "../data/data";

import CardGroup from "react-bootstrap/CardGroup";
import { GenerarCard } from "./card";


export const Remera = () => {
  return (
    <>
      <div className="tituloP">
        <h1>REMERAS</h1>
      </div>
      <CardGroup className="card-container">
        {Stock.map((item, index) => {
          if (item.tipo === "remeras") {
            return (
              <GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price}></GenerarCard>
            );
          }
        })}
      </CardGroup>
    </>
  );
};

export const Pantalon = () => {
  return (
    <>
      <div className="tituloP">
        <h1>PANTALONES</h1>
      </div>
      <CardGroup className="card-container">
        {Stock.map((item, index) => {
          if (item.tipo === "pantalones") {
            return (
              <GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price}></GenerarCard>
            );
          }
        })}
      </CardGroup>
    </>
  );
};
export const Bota = () => {
  return (
    <>
      <div className="tituloP">
        <h1>BOTAS</h1>
      </div>
      <CardGroup className="card-container">
        {Stock.map((item, index) => {
          if (item.tipo === "botas") {
            return (
              <GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price}></GenerarCard>
            );
          }
        })}
      </CardGroup>
    </>
  );
};
