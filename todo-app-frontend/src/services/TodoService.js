import axios from "axios";

const BASE_URL = "http://localhost:8080/api/todos";

// create todo REST API

export const createTodo = (todo) => {
  return axios.post(BASE_URL, todo);
};

// get all todos REST API

export const getAllTodos = () => {
  return axios.get(BASE_URL);
};

// get single todo REST API
// this API is not used in this app

export const getTodoById = (id) => {
  return axios.get(BASE_URL + "/" + id);
};

// update todo REST API
// this API is not used in this app

export const updateTodo = (id, todo) => {
  return axios.put(BASE_URL + "/" + id, todo);
};

// delete todo REST API

export const deleteTodoById = (id) => {
  return axios.delete(BASE_URL + "/" + id);
};
