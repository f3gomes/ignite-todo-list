import { api } from "../api/axios";

export const createTask = async (data: object) => {
  await api
    .post(`/tasks/new`, data)
    .then((res) => {
      console.log("Tarefa criada com sucesso");
    })
    .catch((err) => {
      console.log("Erro ao criar tarefa: ", err);
    });
};
