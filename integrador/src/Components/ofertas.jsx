import React from "react";
import { Stock } from "../data/data";

import CardGroup from "react-bootstrap/CardGroup";
import { GenerarCard } from "./card";


export function Ofertas() {
  return (
    <>
      <div className="tituloP">
        <h1>Productos a bajo price</h1>
      </div>
      <CardGroup className="card-container">
        {Stock.map((item, index) => {
          if (item.price <= 10) {
            return (
              <GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price} ></GenerarCard>
            );
          }
        })}
      </CardGroup>
    </>
  );
}
