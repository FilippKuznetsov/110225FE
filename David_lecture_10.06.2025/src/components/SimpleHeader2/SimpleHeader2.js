import React from "react";
import styles from './SimpleHeader2.module.css'

export default function SimpleHeader2({
    headerText='Hello, im Default Header Text',type='info'
}) {
  return (<div>
  <h1 className={styles[type]}>{headerText}</h1>
  
  
  </div>)
}
