import { api } from "../api/axios";

export const getTasks = async () => {
  const res = await api.get("/tasks/all");
  const data = await res.data;

  return data;
};
