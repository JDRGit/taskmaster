"use client";

import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 w-full">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className="flex-grow p-3 border border-gray-300 rounded-l focus:border-blue-500"
      />
      <button type="submit" className="p-3 bg-blue-500 text-white rounded-r hover:bg-blue-600">Add</button>
    </form>
  );
};

export default TaskForm;
