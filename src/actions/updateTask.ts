import { api } from "../api/axios";

export const updateTask = async (taskId: string, data: object) => {
  await api
    .patch(`/tasks/${taskId}`, data)
    .then((res) => {
      console.log("Tarefa atualizada com sucesso");
    })
    .catch((err) => {
      console.log("Erro ao atualizar tarefa: ", err);
    });
};
