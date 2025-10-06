import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const toggleComplete = (id) =>
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const startEdit = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const editTask = (updated) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setIsEditing(false);
    setCurrentTask(null);
  };

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo List</h1>

      <TodoForm
        addTask={addTask}
        editTask={editTask}
        isEditing={isEditing}
        currentTask={currentTask}
      />

      <TodoList
        tasks={tasks}
        filter={filter}
        toggleComplete={toggleComplete}
        startEdit={startEdit}
        confirmDelete={confirmDelete}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
