import { createContext, useState } from "react";

interface TaskProps {
  id: number;
  desc: string;
  status: string;
}

interface DataProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext({} as DataProps);

export const ContextProvider = ({ children }: ProviderProps) => {
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
