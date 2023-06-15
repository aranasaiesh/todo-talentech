import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleCheckboxChange = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(updatedTodo.id, updatedTodo.completed);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 ">
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={handleDeleteClick}
        className="mr-8 flex border border-gray-500 bg-gray-500 text-white"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TodoItem;
