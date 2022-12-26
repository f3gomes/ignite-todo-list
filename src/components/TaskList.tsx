import React from "react";
import styles from "./TaskList.module.css";
import clip from "../assets/clipboard.svg";

export default function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.main}>
        <div>
          <img src={clip} alt="lista" />
        </div>
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
