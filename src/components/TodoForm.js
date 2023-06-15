import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "") {
      addTodo(title.trim());
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mb-8"
    >
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        className="border border-blue-500 rounded-md mr-2"
      />
      <button
        type="submit"
        className="border border-blue-500 bg-blue-500 text-white rounded-md w-20"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
