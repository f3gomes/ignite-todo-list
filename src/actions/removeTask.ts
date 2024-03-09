import { api } from "../api/axios";

export const removeTask = async (taskId: string) => {
    await api
      .delete(`/tasks/${taskId}`)
      .then((res) => {
        console.log("Tarefa removida com sucesso");
      })
      .catch((err) => {
        console.log("Erro ao remover tarefa: ", err);
      });
  };
  