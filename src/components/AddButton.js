import React from 'react'

export const AddButton = ({onClick}) => {
  return (
    <div>

      <button className="btn btn-success myAddButton" onClick={onClick}>
        Add Task
      </button>

    </div>
  )
}
