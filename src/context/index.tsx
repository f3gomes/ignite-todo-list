import { createContext, useEffect, useState } from "react";

interface TaskProps {
  id: number;
  desc: string;
  status: string;
}

interface DataProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]> | any>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext({} as DataProps);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")!) || []
  );

  useEffect(() => {
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <MainContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
