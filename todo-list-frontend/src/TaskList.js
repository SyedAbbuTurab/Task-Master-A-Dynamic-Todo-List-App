import React from 'react';
import TaskItem from './TaskItem'
import './TaskList.css'; // Adjust the path if necessary


function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </ul>
  );
}

export default TaskList;
