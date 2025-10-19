// import React from "react";

// export const Task = ({ task, date, handleDeleteButton, index }) => {
//   const formattedDate = new Date(date).toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="container tasksContainer">
//       <div className="row myRow align-items-center">
//         <div className="col-1 text-start">{index + 1}</div>

//         <div className="col-5 text-start">{task}</div>

//         <div className="col-4 text-start">{formattedDate}</div>

//         <div className="col-2 text-start">
//           <button
//             type="button"
//             className="btn btn-danger myButton"
//             onClick={() => {
//               handleDeleteButton(index);
//             }}
//           >
//             <i className="bi bi-trash"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Task = ({ task, date, handleDeleteButton, index }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
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
