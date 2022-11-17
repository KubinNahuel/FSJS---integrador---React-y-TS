import React,{useState, Children, useContext} from "react"
 

const userContext=React.createContext()
const userToggleContext=React.createContext()




export function useUserContext(){
    return useContext(userContext)
 }

 export function useUserToggleContext(){
    return useContext(userToggleContext)
 }
export function UserProvider(props){
   
    const [user,setUser]=useState(null)
    const cambiarLogin=(name,years)=>{
      if(user){
      setUser(null)
      }else{
        setUser({
          name:name,
          years:years
        })}
      
    }
    
    
    return(
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiarLogin}>  
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    )
   }
