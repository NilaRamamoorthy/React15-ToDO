import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  filter,
  toggleComplete,
  startEdit,
  confirmDelete,
  setFilter,
}) => {
  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((t) => t.completed)
      : tasks.filter((t) => !t.completed);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded-md ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            filter === "completed"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            filter === "pending"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            startEdit={startEdit}
            confirmDelete={confirmDelete}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
