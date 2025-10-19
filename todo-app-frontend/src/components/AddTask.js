import React, { useState } from "react";
import "../App.css";

export const AddTask = ({ handleAddButton }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmitButtonClicked = (event) => {
    event.preventDefault();

    handleAddButton(task, date);

    setTask("");
    setDate("");

    document.querySelector('[data-bs-dismiss="modal"]')?.click();
  };

  return (
    <>
      {/* bootstrap */}
      <button
        type="button"
        className="btn btn-success myAddTaskButton mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Task
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmitButtonClicked}>
                <div className="mb-3">
                  <label htmlFor="task" className="form-label">
                    Task
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    id="task"
                    value={task}
                    onChange={handleTaskChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary submitButton"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* bootstrap */}
    </>
  );
};
