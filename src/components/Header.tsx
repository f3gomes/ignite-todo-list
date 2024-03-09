import React from "react";
import styles from "../styles/Header.module.css";
import { FaClipboardList } from "react-icons/fa";

export default function Header() {
  return (
    <div className={styles.container}>
      <FaClipboardList size={28}/>
      <h1>
        <span>Task</span>
        <span>Manager</span>
      </h1>
    </div>
  );
}
