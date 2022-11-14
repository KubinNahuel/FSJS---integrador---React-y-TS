import React, { useState } from "react";
import UncontrolledExample from './slide'
import GroupExample from './cardGroups'
import AdvancedExample from './pagination'
import AllCollapseExample from "./accordion";
import { Resumen } from "./resumen";


function Landing (){
const [categoria2,setCategoria2]=useState("1");
let pag;
  switch(categoria2){
      case "1":
      pag=<>
      <UncontrolledExample/>
      <GroupExample/>
      <AllCollapseExample/>
      <AdvancedExample setCategoria2={setCategoria2}/>
      </>
      break;
    case "2":
      pag=<> <Resumen/>
      <AdvancedExample setCategoria2={setCategoria2}/>
      </>
      break;
     }
return(
<div>
      {pag}
</div>
)
}
export default Landing