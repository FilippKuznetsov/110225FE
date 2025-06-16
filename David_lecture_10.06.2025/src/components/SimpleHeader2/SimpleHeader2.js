import React from "react";
import styles from './SimpleHeader2.module.css'
import customSyles from './customStyles.module.css'

export default function SimpleHeader2({
    headerText='Hello, im Default Header Text',type='info',customStyles
}) {
  return (<div>
  <h1 className={styles[type]} style={customStyles}>{headerText}</h1>
  
  
  </div>)
}
