"use client";

import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded mb-2">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.text}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
    </div>
  );
};

export default TaskItem;
