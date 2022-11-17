import React, {useState} from "react"
import { useUserContext, useUserToggleContext } from "../context/userProvider";




export const Login=()=>{
    const [nombre,setNombre]=useState("")
    const [edad,setEdad]=useState("")
    
    const cambiarNombre=(nuevoNombre)=>{
        setNombre(nuevoNombre)
    }
    const cambiarEdad=(nuevaEdad)=>{
        setEdad(nuevaEdad)

    }
    
    const user= useUserContext()
    const cambiaLogin=useUserToggleContext()
    const  handleSubmit=(event)=>{
    event.preventDefault()
        cambiaLogin(nombre,edad)
        localStorage.setItem(user.name,user.years)
        
    }
    

    return(
        <>
        <div className="flexLogin">
        <div className="login">
            <h1>Ingresar</h1>
            <form className="formL" name="formulario" method="post" action="/send.php" enctype="multipart/form-data" onSubmit={handleSubmit}>
                <div className="inputName">
                <label htmlFor="">Nombre</label>
                <br></br>
                <input type="text"  onChange={e=>cambiarNombre(e.target.value)} placeholder="Pepito..."/>
                </div>
                <div className="inputYears">
                <label htmlFor="">Edad</label>
                <br></br>
                <input type="number" onChange={e=>cambiarEdad(e.target.value)} placeholder="25..."/>
                </div>
                <button type="submit" className="botonLogin">Mandar</button>
            </form>
        </div>
        </div>
        </>
    )
}