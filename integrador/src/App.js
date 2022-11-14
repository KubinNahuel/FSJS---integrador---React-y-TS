import './App.css';
import NavScrollExample from './Components/navBar'
import NavDropdownExample from './Components/nav'
import Vender from './Components/vender'
import { useState, useEffect } from 'react';
import Landing from './Components/landing';
import Footer from './Components/footer';
import { Remera, Bota, Pantalon } from './Components/productos';
import { Pantalones } from './data/data';
import { Ofertas } from './Components/ofertas';
import AdvancedExample from './Components/pagination';
import { Resumen } from './Components/resumen';
import { ResB } from './Components/buscador';








function App() {
  const [categoria,setCategoria]=useState("Landing");
  let render;
  
  switch(categoria){
    case "Landing":
      render= <Landing/>
      break;
    case "Vender":
      render= <Vender/>
      break;
     case "Ofertas":
     render= <Ofertas/>
    break;
     case "Remeras":
      render= <Remera/>
     break;
     case "Pantalones":
      render= <Pantalon/>
     break; 
     case "Botas":
     render= <Bota/>
    break;
    case "1":
      render= <Landing />
     break; 
     case "2":
      render= <Resumen/>
     break; 
    //  case "Buscar":
    //   render= <ResB/>
    //  break; 

  }
  return (
    <div className="App" >
      <header className="App-header">
      <NavScrollExample setCategoria={setCategoria}/>
      <NavDropdownExample setCategoria={setCategoria}/>
      </header>
      <body>
        {render}

      </body>
      <footer><Footer/></footer>
      
      
      </div>
      
    
  );
}

export default App;
