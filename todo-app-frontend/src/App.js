import React, { useState, useEffect } from "react";
import { Title } from "./components/Title";
import { NoTaskMessage } from "./components/NoTaskMessage";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import {
  createTodo,
  getAllTodos,
  deleteTodoById,
} from "./services/TodoService";

export const App = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getAllTodos()
      .then((response) => {
        setArr(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddButton = (task, date) => {
    const newTodo = { task, date };

    createTodo(newTodo)
      .then((response) => setArr([...arr, response.data]))
      .catch((error) => console.error(error));
  };

  const handleDeleteButton = (index) => {
    const todo = arr[index];

    deleteTodoById(todo.id)
      .then(() => {
        const copyArr = arr.filter((_, i) => i !== index);
        setArr(copyArr);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Title> </Title>

      <AddTask handleAddButton={handleAddButton}></AddTask>

      {arr.length > 0 && (
        <Tasks arr={arr} handleDeleteButton={handleDeleteButton} />
      )}

      {arr.length === 0 && <NoTaskMessage></NoTaskMessage>}
    </div>
  );
};
