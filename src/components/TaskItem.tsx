import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegCircle, FaTrash } from "react-icons/fa";
import styles from "../styles/TaskItem.module.css";

interface TaskProps {
  id: number;
  desc: string;
  status: string;
  handleDeleteTask: (id: number) => void;
  handleUpdateTaskState: (id: number) => void;
}

export default function TaskItem({
  id,
  desc,
  status,
  handleDeleteTask,
  handleUpdateTaskState,
}: TaskProps) {
  let styleClass = status === "C" ? styles.taskCreated : styles.taskFinished;

  return (
    <div className={styles.taskItem}>
      <span className={styleClass}>
        {status === "C" ? (
          <FaRegCircle onClick={() => handleUpdateTaskState(id)} />
        ) : (
          <BsCheckCircleFill onClick={() => handleUpdateTaskState(id)} />
        )}
      </span>
      <p className={`${status === "F" ? styles.taskFinished : ""}`}>{desc}</p>
      <span onClick={() => handleDeleteTask(id)}>
        <FaTrash />
      </span>
    </div>
  );
}
