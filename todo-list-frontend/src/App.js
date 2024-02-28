import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // For editing

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  };

  const saveTask = async (task) => {
    if (task._id) {
      // If task has an ID, it's being edited - update it
      await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, task);
    } else {
      // No ID means it's a new task - add it
      await axios.post('http://localhost:5000/api/tasks', task);
    }
    fetchTasks(); // Reload tasks after saving
    setCurrentTask(null); // Reset currentTask to clear the form
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks(); // Reload tasks after deleting
  };

  const editTask = (task) => {
    setCurrentTask(task); // Set currentTask to the one user wants to edit
  };

  return (
    <div>
      <TaskForm saveTask={saveTask} currentTask={currentTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
