import React, {useState} from "react"
import { useUserContext, useUserToggleContext } from "../context/userProvider";




export const Login=()=>{
    const [nombre,setNombre]=useState("")
    const [edad,setEdad]=useState("")
    const [state, setState]=useState({
        email:'',
        password:''
    })
    
    const cambiarNombre=(nuevoNombre)=>{
        setNombre(nuevoNombre)
    }
    const cambiarEdad=(nuevaEdad)=>{
        setEdad(nuevaEdad)

    }
    
    const user= useUserContext()
    const cambiaLogin=useUserToggleContext()
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        }
        const handleSubmit =(e)=>{
        e.preventDefault();
        fetch(`http://localhost:3030/api/user/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(state)
        }).then((res)=>{
            res.json();
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
        }
    

    return(
        <>
        <div className="flexLogin">
        <div className="login">
            <h1>Ingresar</h1>
            <form className="formL" name="formulario" method="post" action="/send.php" enctype="multipart/form-data" onSubmit={handleSubmit}>
                <div className="inputYears">
                <label htmlFor="">Correo Electronico</label>
                <br></br>
                <input type="email" name="email" onChange={handleChange} placeholder="pepito@..." required/>
                </div>
                <div className="inputName">
                <label htmlFor="">Contraseña</label>
                <br></br>
                <input type="password" name="password" onChange={handleChange} placeholder="Password..." required/>
                </div>
                <button type="submit" className="botonLogin" onSubmit={handleSubmit}>Iniciar Se</button>
            </form>
        </div>
        </div>
        </>
    )
}