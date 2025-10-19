import React from "react";
import { Task } from "./Task";

export const Tasks = ({ arr, handleDeleteButton }) => {
  return (
    <div className="tasksContainer">
      {arr.length > 0 && (
        <div className="headerRow">
          <div className="colNo">No.</div>
          <div className="colTask">Task</div>
          <div className="colDate">Date</div>
          <div className="colDelete"></div>
        </div>
      )}

      {arr.map((item, index) => (
        <Task
          key={index}
          task={item.task}
          date={item.date}
          handleDeleteButton={handleDeleteButton}
          index={index}
        />
      ))}
    </div>
  );
};
