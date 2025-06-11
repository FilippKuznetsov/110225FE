import React from "react";
import dwarwes from "./dwarwes";
import styles from "./dwarwes.module.css";

export default function DwarfCard({name='Default Brave Dwarf',nickname,age,weapon='Default Axe'}) {
        console.log({name});
        
    return (
    <div className={styles.oneDiv}>
      <div className={styles.cards}>
        <h3>{name}</h3>
        <h4>{nickname}</h4>
        <p>{age}</p>
        <p>{weapon}</p>
      </div>
    </div>
  );
}
