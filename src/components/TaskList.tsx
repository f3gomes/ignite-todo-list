import React, { useState } from "react";
import styles from "./TaskList.module.css";
import clip from "../assets/clipboard.svg";
import { FaRegCircle, FaTrash } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  id: number;
  desc: string;
  status: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      desc: "Finalizar Projeto Desafio",
      status: "C",
    },

    {
      id: 2,
      desc: "Assistir filme do Jujutsu",
      status: "F",
    },
  ]);

  const finishedTasks = tasks.filter((item: TaskProps) => item.status === "F");

  const handleDeleteTask = (id: number) => {
    const updateTasks = tasks.filter((item: TaskProps) => item.id !== id);
    setTasks(updateTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>{finishedTasks.length}</span>
        </div>
      </div>

      {tasks.length > 0 ? (
        <>
          <div className={styles.taskList}>
            {tasks.map((item: TaskProps) => (
              <div className={styles.taskItem} key={item.id}>
                <span>
                  {item.status === "C" ? (
                    <FaRegCircle />
                  ) : (
                    <BsCheckCircleFill color="#5e60ce" />
                  )}
                </span>
                <p>{item.desc}</p>
                <span onClick={() => handleDeleteTask(item.id)}>
                  <FaTrash />
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.main}>
          <div>
            <img src={clip} alt="lista" />
          </div>
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}
