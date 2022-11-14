import React from "react";
function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h2>Contacto</h2>
              <ui className="list-unstyled">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Sede Principal</h4>
              <ui className="list-unstyled">
                <li>Marcos Kanner 1114</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Datos</h4>
              <ui className="list-unstyled">
                <li>Fecha de creacion</li>
                <li>Biografia</li>
                <li>Politicas de servicio</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Mercado Libre| All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;