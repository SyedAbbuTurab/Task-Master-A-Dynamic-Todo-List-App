

import React from 'react';
// Ensure the CSS file for TaskItem is imported in your component or App.js
import './TaskItem.css'; // Adjust path as necessary

function TaskItem({ task, deleteTask, editTask }) {
  // Helper to format the deadline date string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <li className="task-item">
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>Description: {task.description}</p>
        <p>Category: {task.category}</p>
        {/* Format the deadline to make it more readable */}
        <p>Deadline: {formatDate(task.deadline)}</p>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      </div>
      <div className="button-container">
        <button className="edit-btn" onClick={() => editTask(task)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteTask(task._id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;


