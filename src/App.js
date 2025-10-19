import React, { useState } from "react";
import { Title } from "./components/Title";
import { NoTaskMessage } from "./components/NoTaskMessage";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

export const App = () => {
  const [arr, setArr] = useState([]);

  const handleAddButton = (task, date) => {
    const newArr = [...arr, { task: task, date: date }];

    setArr(newArr);
  };

  const handleDeleteButton = (no) => {
    const deletedArr = arr.filter((_, index) => index !== no);
    setArr(deletedArr);
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
