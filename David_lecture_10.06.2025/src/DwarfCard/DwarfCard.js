import React from "react";
/* import dwarwes from "./DwarfCard/dwarwes"; */
import styles from "./dwarwes.module.css";
import SimpleParagraph from "../components/SimpleParagraph/SimpleParagraph";

export default function DwarfCard({dwarfData}) {
 /*        console.log({name}); */
        
    return (
    <div className={styles.oneDiv}>
      <div className={styles.cards}>
       <h3> <SimpleParagraph textContent={dwarfData.name || 'Default name'}/></h3>
        <h4>{dwarfData.nickname}</h4>
        <p>{dwarfData.age}</p>
        <p>{dwarfData.weapon || 'Default weapon'}</p>
      </div>
    </div>
  );
}
