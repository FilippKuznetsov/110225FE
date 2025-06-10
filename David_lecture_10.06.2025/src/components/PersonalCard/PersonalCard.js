import React from "react";
import styles from "./PersonalCard.module.css";

export default function PersonalCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3>Filipp Kuznetsov</h3>
        <p>Bike mechanik+ junior Frontend Developer</p>
        <p>This is a couple words thats im very good guy</p>
      </div>
      <div className={styles.Profilfoto}>
        <img src="/Profil_Foto.jpg" alt="Profil_bild" />
      </div>
    </div>
  );
}
