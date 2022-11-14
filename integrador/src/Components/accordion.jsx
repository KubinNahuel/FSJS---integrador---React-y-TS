import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Con que se realizo esta pagina?</Accordion.Header>
        <Accordion.Body>
          Esta pagina se realizo Con JavaScript, React y React-Bootstrap
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tuve un problema con un producto, ¿que hago ?</Accordion.Header>
        <Accordion.Body>
          Consulta la seccion de Politicas de servicio en la párte inferior de la pagina
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;