import React from "react";

const TodoItem = ({ task, toggleComplete, startEdit, confirmDelete }) => {
  return (
    <div
      className="flex justify-between items-center bg-white dark:bg-gray-800 shadow p-3 rounded-md mb-2"
    >
      <div
        className={`flex-1 cursor-pointer ${
          task.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-100"
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => startEdit(task)}
          className="text-yellow-500 hover:text-yellow-600"
        >
          ✏️
        </button>
        <button
          onClick={() => confirmDelete(task.id)}
          className="text-red-500 hover:text-red-600"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
