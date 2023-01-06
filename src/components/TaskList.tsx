import React, { useContext } from "react";
import styles from "../styles/TaskList.module.css";
import clip from "../assets/clipboard.svg";
import { MainContext } from "../context";
import TaskItem from "./TaskItem";

interface TaskProps {
  id: number;
  desc: string;
  status: string;
}

export default function TaskList() {
  const { tasks, setTasks } = useContext(MainContext);

  const finishedTasks = tasks?.filter((item: TaskProps) => item.status === "F");

  const handleDeleteTask = (id: number) => {
    const updateTasks = tasks.filter((item: TaskProps) => item.id !== id);
    setTasks(updateTasks);
  };

  const handleUpdateTaskState = (id: number) => {
    const updateTasks = tasks.map((item: TaskProps) => {
      if (item.id === id) {
        if (item.status === "C") {
          return { ...item, status: "F" };
        }

        return { ...item, status: "C" };
      } else {
        return item;
      }
    });

    setTasks(updateTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{tasks?.length}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>
            {finishedTasks?.length} de {tasks?.length}
          </span>
        </div>
      </div>

      {tasks?.length > 0 ? (
        <>
          <div className={styles.taskList}>
            {tasks.map((item: TaskProps) => (
              <TaskItem
                key={item.id}
                id={item.id}
                desc={item.desc}
                status={item.status}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTaskState={handleUpdateTaskState}
              />
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
