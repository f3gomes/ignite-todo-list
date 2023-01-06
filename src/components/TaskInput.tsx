import React, { useContext, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MainContext } from "../context";
import styles from "../styles/TaskInput.module.css";

export default function TaskInput() {
  const [textInput, setTextInput] = useState("");
  const { tasks, setTasks } = useContext(MainContext);

  const handleNewTask = () => {
    if (textInput === "") {
      alert("Digite uma descrição!");
    } else {
      const newTask = {
        id: tasks.length + 1,
        desc: textInput,
        status: "C",
      };

      setTasks([...tasks, newTask]);
      setTextInput("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={textInput}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setTextInput(event.target.value)}
      />
      <button onClick={handleNewTask}>
        Criar <MdOutlineAddCircleOutline size={15} />
      </button>
    </div>
  );
}
