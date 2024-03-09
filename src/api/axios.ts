import axios from "axios";

export const api = axios.create({
  baseURL: "https://sphere-task-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});