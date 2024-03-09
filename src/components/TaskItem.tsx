import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegCircle, FaTrash } from "react-icons/fa";
import styles from "../styles/TaskItem.module.css";

interface TaskItemProps {
  id: string;
  desc: string;
  done: boolean;
  handleDeleteTask: (id: string) => void;
  handleUpdateTaskState: (id: string) => void;
}

export default function TaskItem({
  id,
  desc,
  done,
  handleDeleteTask,
  handleUpdateTaskState,
}: TaskItemProps) {
  let styleClass = done ? styles.taskCreated : styles.taskFinished;

  return (
    <div className={styles.taskItem}>
      <span className={styleClass}>
        {!done ? (
          <FaRegCircle onClick={() => handleUpdateTaskState(id)} />
        ) : (
          <BsCheckCircleFill onClick={() => handleUpdateTaskState(id)} />
        )}
      </span>
      <p className={`${done ? styles.taskFinished : ""}`}>{desc}</p>
      <span onClick={() => handleDeleteTask(id)}>
        <FaTrash />
      </span>
    </div>
  );
}
