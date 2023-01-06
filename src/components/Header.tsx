import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="foguete" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </div>
  );
}
