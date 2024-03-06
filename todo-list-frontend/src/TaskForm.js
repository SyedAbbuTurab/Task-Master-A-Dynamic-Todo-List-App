import React, { useEffect, useState } from 'react';

function TaskForm({ saveTask, currentTask, userId }) {
  // Default empty task structure for initialization and resetting the form
  const emptyTask = {
    title: '', 
    description: '', 
    category: '', 
    deadline: '', // Ensure this is in 'YYYY-MM-DD' format for editing
    completed: false,
    userId: userId // Assign userId to the task
  };

  // Initialize task state. Use emptyTask if currentTask is null or undefined
  const [task, setTask] = useState(currentTask || emptyTask);

  useEffect(() => {
    setTask(currentTask || emptyTask);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({ ...task, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask({
      ...task,
      deadline: task.deadline || new Date().toISOString().split('T')[0] // Ensure deadline is properly set or use current date
    });
    setTask(emptyTask); // Reset form after submission
  };

  // Format deadline for input[type="date"] if it exists, or use an empty string for new tasks
  const formattedDeadline = task.deadline ? task.deadline.split('T')[0] : '';

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input name="title" type="text" value={task.title} onChange={handleChange} placeholder="Title" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      </div>
      <div>
        <label>Category:</label>
        <input name="category" type="text" value={task.category} onChange={handleChange} placeholder="Category" />
      </div>
      <div>
        <label>Deadline:</label>
        <input name="deadline" type="date" value={formattedDeadline} onChange={handleChange} placeholder="YYYY-MM-DD" />
      </div>
      <div>
        <label>Completed:</label>
        <input name="completed" type="checkbox" checked={task.completed} onChange={handleChange} />
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
