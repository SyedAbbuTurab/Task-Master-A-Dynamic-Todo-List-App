// TaskItem.js
import React from 'react';
import './TaskItem.css'; // Import CSS file

function TaskItem({ task, deleteTask, editTask }) {
  // Helper to format the deadline date string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle edit and delete task actions
  const handleEdit = () => {
    editTask(task);
  };

  const handleDelete = () => {
    deleteTask(task._id);
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
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
