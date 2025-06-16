import React from "react";
import DwarfCard from "../../DwarfCard/DwarfCard";
import { dwarwes } from "../../DwarfCard/dwarwes";

export default function DwarfsList({listHeaderText='Dwarwes list',dwarwes}) {

const isEmpty=Array.isArray(dwarwes) || dwarwes.length===0;


  return (<div>

<h4>  {  !isEmpty ? 'The Array dwarwes is Empty!' : listHeaderText}</h4>
{dwarwes && dwarwes.map((el)=>{
    return(
        <DwarfCard  key={el} dwarfData={el} /> 
    )
})}
  </div>)
}
