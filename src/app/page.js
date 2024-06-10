"use client";

import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import { getTasks, addTask, deleteTask, toggleTaskCompletion } from '../utils/db';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    addTask(newTask);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTask = (id) => {
    toggleTaskCompletion(id);
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">TaskMaster</h1>
      <div className="w-full max-w-md">
        <TaskForm onAdd={handleAddTask} />
        <div>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onDelete={handleDeleteTask} 
              onToggle={handleToggleTask} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
