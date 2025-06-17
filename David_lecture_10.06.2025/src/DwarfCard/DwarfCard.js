import React from "react";
/* import dwarwes from "./DwarfCard/dwarwes"; */
import styles from "./dwarwes.module.css";
import SimpleParagraph from "../components/SimpleParagraph/SimpleParagraph";


export default function DwarfCard({dwarfData,describeClickHandler}) {



const decribeInf=()=>{
  console.log(`Dwarf: ${dwarfData.name} ${dwarfData.nickname}, age: ${dwarfData.age}, weapon: ${dwarfData.weapon} `);
  
}
        

const infoplease=()=>{
  describeClickHandler();
  decribeInf();
}
    return (
    <div className={styles.oneDiv}>
      <div className={styles.cards}>
       <h3> <SimpleParagraph textContent={dwarfData.name || 'Default name'}/></h3>
        <h4>{dwarfData.nickname}</h4>
        <p>{dwarfData.age}</p>
        <p>{dwarfData.weapon || 'Default weapon'}</p>
        <button onClick={infoplease} onKeyDown={decribeInf} >Get Info: </button>
      </div>
    </div>
  );
}
