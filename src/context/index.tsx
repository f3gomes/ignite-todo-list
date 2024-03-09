import { createContext, useEffect, useState } from "react";
import { getTasks } from "../actions/getTasks";

export interface TaskProps {
  _id: string;
  desc: string;
  done: boolean;
}

interface DataProps {
  isLoading: boolean;
  tasks: TaskProps[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<any>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext({} as DataProps);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateTaskList = async () => {
    const list = await getTasks();
    setTasks(list);
    setIsLoading(false);
  };

  useEffect(() => {
    updateTaskList();
  }, []);

  return (
    <MainContext.Provider
      value={{
        tasks,
        setTasks,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
