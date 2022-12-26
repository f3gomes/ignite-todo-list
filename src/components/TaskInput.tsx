import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import styles from "./TaskInput.module.css"

export default function TaskInput() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button>
        Criar <MdOutlineAddCircleOutline size={15}/>
      </button>
    </div>
  );
}
