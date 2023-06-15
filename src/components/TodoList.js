import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {
  getTodos,
  createTodo,
  updateTodo as updateTodoAPI,
  deleteTodo as deleteTodoAPI,
} from "../services/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      const filteredTodos = response.data.slice(0, 20);
      setTodos(filteredTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await createTodo({
        title,
        completed: false,
      });
      const newTodo = response.data;
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      const response = await updateTodoAPI(id, {
        completed,
      });
      const updatedTodo = response.data;
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        return updatedTodos;
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
        return updatedTodos;
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center p-8 font-bold">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
