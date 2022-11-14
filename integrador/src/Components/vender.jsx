import React, { useReducer } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const initialState={
    imagen:'',
    nombre:'',
    descripcion:'',
    precio:''
}

const reducer=(state,action)=>{
switch(action.type){
    case 'CH_NOMBRE':{
        return{
            ...state,
            nombre:action.value
        }
    }
    case 'CH_DESCRIPCION':{
        return{
            ...state,
            descripcion:action.value
        }
    }
    case 'CH_PRECIO':{
        return{
            ...state,
            precio:action.value
        }
    }
    case 'CH_IMAGEN':{
        return{
            ...state,
            imagen:action.value
        }
    }
}
    return state;
}

function Vender(){
    const [state,dispatch]=useReducer(reducer, initialState)
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(state)
        
    }
    return(
        <div className="cardVenderContainer">
        <div className="cardVender">
            
                <form name="formulario" method="post" action="/send.php" enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <label htmlFor="">Seleccione imagen del producto </label>
                    <input type="file" name="adjunto" accept=".jpg,.png"
                    value={state.imagen}  
                    onChange={(event)=>dispatch({type:'CH_IMAGEN',value:event.target.value})}/>   
            
                    <div className="cardVenderBody">
                
                    <label htmlFor="">Ingrese nombre del producto</label>
                    <input 
                    type="text" 
                    name="producto" 
                    value={state.nombre} 
                    onChange={(event)=>dispatch({type:'CH_NOMBRE',value:event.target.value})}
                    />
                    <label htmlFor="">Ingrese descripcion del producto</label>
                    <input 
                    type="text" 
                    name="descripcion" 
                    value={state.descripcion}
                    onChange={(event)=>dispatch({type:'CH_DESCRIPCION',value:event.target.value})}
                    />
                    <label>Ingrese Precio del producto</label>
                    <input 
                    type="number" 
                    name="precio"
                     value={state.precio}
                     onChange={(event)=>dispatch({type:'CH_PRECIO',value:event.target.value})}
                     />
                    <button type="submit">Mandar</button>
                    </div>
                </form>
                </div>
                
                <div>
                <CardGroup className='card-container'>
        <Card.Body >
        <Card.Img className='imagen-card'  src='https://us.123rf.com/450wm/photoart23d/photoart23d1902/photoart23d190201517/117662503-marcas-de-verificaci%C3%B3n-icono-de-cruz-roja-degradado-ilustraci%C3%B3n-vectorial.jpg?ver=6' />
      <Card.Title>{state.nombre}</Card.Title>
      <Card.Text>{state.descripcion}</Card.Text>
      <small className="text-muted">${state.precio}</small>
      <Card.Footer>
      <button type='button' className='comprar'>Vender</button>
    </Card.Footer>
    </Card.Body>
    </CardGroup>
    </div>
            
        </div>
        
    )
}

export default Vender