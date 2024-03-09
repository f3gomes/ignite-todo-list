import { api } from "../api/axios";

export const getTasksDone = async () => {
  const res = await api.get("/tasks/done");
  const data = await res.data;

  return data;
};
