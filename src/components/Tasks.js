// import React from "react";
// import { Task } from "./Task";

// export const Tasks = ({ arr, handleDeleteButton }) => {
//   return (
//     <div className="tasksContainer">
//       {arr.length > 0 && (
//         <div className="container my-4">
//           <div className="row fw-bold">
//             <div className="col-2 text-start">No.</div>
//             <div className="col-6 text-start">Task</div>
//             <div className="col-4 text-start">Date</div>
//           </div>
//         </div>
//       )}

//       {arr.map((i, index) => (
//         <Task
//           key={index}
//           task={i.task}
//           date={i.date}
//           handleDeleteButton={handleDeleteButton}
//           index={index}
//         ></Task>
//       ))}
//     </div>
//   );
// };

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
