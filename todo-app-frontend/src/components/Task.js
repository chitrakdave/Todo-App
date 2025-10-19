import React from "react";

export const Task = ({ task, date, handleDeleteButton, index }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="taskRow">
      <div className="colNo">{index + 1}</div>
      <div className="colTask">{task}</div>
      <div className="colDate">{formattedDate}</div>
      <div className="colDelete">
        <button
          type="button"
          className="btn btn-danger deleteButton"
          onClick={() => handleDeleteButton(index)}
          title="Delete Task"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};
