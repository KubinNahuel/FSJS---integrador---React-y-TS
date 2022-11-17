
import "./App.css";
import NavScrollExample from "./Components/navBar";
import NavDropdownExample from "./Components/nav";
import Vender from "./Components/vender";
import React,{ useState, useEffect } from "react";
import Landing from "./Components/landing";
import Footer from "./Components/footer";
import { Remera, Bota, Pantalon } from "./Components/productos";
import { Ofertas } from "./Components/ofertas";
import { Resumen } from "./Components/resumen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./Components/login";
import { UserProvider } from "./context/userProvider";
import { ResB } from "./Components/buscador";
import { Cart } from "./Components/cart";
import { CartProvider } from "react-use-cart";





function App() {
  return (
    <CartProvider>
    <UserProvider>
      <div className="App">
        <Router>
          <header className="App-header">
            <NavScrollExample/>
            <NavDropdownExample />
          </header>
          <body >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Vender" element={<Vender/>} />
              <Route path="/Ofertas" element={<Ofertas/>} />
              <Route path="/Remeras" element={<Remera/>} />
              <Route path="/Pantalon" element={<Pantalon/>} />
              <Route path="/Botas" element={<Bota/>} />
              <Route path="/Resumen" element={<Resumen/>} />
              <Route path="/Login" element={<Login/>} />
               <Route path="/Buscador/:id" element={<ResB/>} /> 
              <Route path="/Carrito" element={<Cart/>} />
            </Routes>
          </body>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    </UserProvider>
    </CartProvider>
  );
}

export default App;
