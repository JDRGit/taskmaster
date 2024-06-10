const getTasks = () => {
  if (typeof window !== "undefined") {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};

const setTasks = (tasks) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  setTasks(tasks);
};

export const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== id);
  setTasks(tasks);
};

export const toggleTaskCompletion = (id) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex > -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    setTasks(tasks);
  }
};

export { getTasks };
