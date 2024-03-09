import React, { useContext, useEffect, useState } from "react";

import TaskItem from "./TaskItem";
import clip from "../assets/clipboard.svg";
import { getTasks } from "../actions/getTasks";
import styles from "../styles/TaskList.module.css";
import { removeTask } from "../actions/removeTask";
import { updateTask } from "../actions/updateTask";
import { MainContext, TaskProps } from "../context";

export default function TaskList() {
  const { tasks, setTasks } = useContext(MainContext);
  const [filteredTasks, setFilteredTasks] = useState<any>([]);

  let finishedTasks = tasks?.filter((item: TaskProps) => item.done);
  let unfinishedTasks = tasks?.filter((item: TaskProps) => !item.done);

  const handleDeleteTask = async (id: string) => {
    await removeTask(id);

    const list = await getTasks();
    setTasks(list);
  };

  const handleUpdateTaskState = async (id: string, done: boolean) => {
    const data = { done: done };
    await updateTask(id, data);

    const list = await getTasks();
    setTasks(list);
  };

  const handleFilterFinished = () => {
    setFilteredTasks(finishedTasks);
  };

  const handleFilterUnFinished = () => {
    setFilteredTasks(unfinishedTasks);
  };

  if (!tasks) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div>Carregando...</div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setFilteredTasks(unfinishedTasks);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <strong
            onClick={handleFilterUnFinished}
            style={{ cursor: "pointer" }}
          >
            Tarefas a fazer
          </strong>
          <span>{unfinishedTasks?.length}</span>
        </div>
        <div>
          <strong onClick={handleFilterFinished} style={{ cursor: "pointer" }}>
            Concluídas
          </strong>
          <span
            style={{ width: finishedTasks.length > 0 ? "3.5rem" : "1.68rem" }}
          >
            {finishedTasks?.length === 0
              ? "0"
              : `${finishedTasks?.length} de ${tasks?.length}`}
          </span>
        </div>
      </div>

      {filteredTasks?.length > 0 ? (
        <>
          <div className={styles.taskList}>
            {filteredTasks?.map((item: TaskProps) => (
              <TaskItem
                key={item._id}
                id={item._id}
                desc={item.desc}
                done={item.done}
                handleDeleteTask={() => handleDeleteTask(item._id)}
                handleUpdateTaskState={() =>
                  handleUpdateTaskState(item._id, !item.done)
                }
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
            <strong>Acompanhe o andamento de suas tarefas</strong>
          </div>
        </div>
      )}
    </div>
  );
}
