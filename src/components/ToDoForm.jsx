import React, { useState, useEffect } from "react";

const TodoForm = ({ addTask, editTask, isEditing, currentTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (isEditing && currentTask) setText(currentTask.text);
  }, [isEditing, currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (isEditing) {
      editTask({ ...currentTask, text });
    } else {
      addTask({ id: Date.now(), text, completed: false });
    }

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 mb-4"
    >
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full sm:w-2/3 p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full sm:w-auto"
      >
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
