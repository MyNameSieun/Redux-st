import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ isActive }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1>{isActive ? "투두 리스트" : "던 리스트"}</h1>
      {todos
        .filter((todo) => todo.isDone !== isActive)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
