import React, { useContext, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import styles from "../styles/TaskInput.module.css";
import { createTask } from "../actions/createTaskt";
import { getTasks } from "../actions/getTasks";
import { MainContext } from "../context";

export default function TaskInput() {
  const [desc, setDesc] = useState("");
  const { setTasks, setIsLoading } = useContext(MainContext);

  const handleNewTask = async () => {
    if (desc === "") {
      alert("Digite uma descrição!");
    } else {
      const data = { desc };
      await createTask(data);
      setDesc("");

      const list = await getTasks();
      setTasks(list);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={desc}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setDesc(event.target.value)}
      />
      <button onClick={handleNewTask}>
        Criar <MdOutlineAddCircleOutline size={15} />
      </button>
    </div>
  );
}
