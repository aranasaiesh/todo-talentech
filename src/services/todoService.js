import { get, post, put, destroy } from "../utils/api";

export const getTodos = () => {
  return get("/todos");
};

export const createTodo = (todo) => {
  return post("/todos", todo);
};

export const updateTodo = (id, todo) => {
  return put(`/todos/${id}`, todo);
};

export const deleteTodo = (id) => {
  return destroy(`/todos/${id}`);
};
