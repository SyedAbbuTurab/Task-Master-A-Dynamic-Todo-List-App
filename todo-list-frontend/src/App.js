import React, { useEffect, useState } from 'react';
import RegistrationForm from './registrationForm';
import SignupForm from "./SignupForm";
import LoginForm from './loginForm';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // For editing
  const [userId, setUserId] = useState(null);
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      setUserId(savedUserId);
      fetchTasks(savedUserId);
      setRoute('tasks');
    } else {
      setUserId(null);
      setRoute('home');
    }

    // Add event listener to delete user ID from local storage on page refresh
    const handleBeforeUnload = () => {
      localStorage.removeItem('userId');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogin = async (userId) => {
    localStorage.setItem('userId', userId);
    setUserId(userId);
    fetchTasks(userId);
    setRoute('tasks');
  };

  const handleSignup = async () => {
    setRoute('signup')
  };

  const fetchTasks = async (userId) => {
    if (userId) {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', { params: { userId } });
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    }
  };

  const saveTask = async (task) => {
    try {
      const data = { ...task, userId };
      if (task._id) {
        await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, data);
      } else {
        await axios.post('http://localhost:5000/api/tasks', data);
      }
      fetchTasks(userId);
      setCurrentTask(null);
    } catch (error) {
      console.error('Failed to save task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, { data: { userId } });
      fetchTasks(userId);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const editTask = (task) => {
    // Implement edit task functionality
    setCurrentTask(task);
  };

  const renderComponent = () => {
    switch (route) {
      case 'home':
        return (
          <div>
            <button onClick={handleSignup}>Sign Up</button>
            <LoginForm onLogin={handleLogin} />
          </div>
        );
      case 'register':

        return (<RegistrationForm />);
      case 'signup': // New case for rendering SignupForm
        return <SignupForm />;
      case 'tasks':
        return (
          <div>
            <TaskForm saveTask={saveTask} currentTask={currentTask} userId={userId} />
            <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} userId={userId} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
}

export default App;
