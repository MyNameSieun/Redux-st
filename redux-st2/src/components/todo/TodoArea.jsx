// src/components/TodoArea.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

const TodoArea = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddTodo = () => {
    if (title.trim() === "" || body.trim() === "") {
      alert("제목과 내용을 입력하세요.");
      return;
    }
    dispatch(addTodo(title, body));
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="내용"
      />
      <button onClick={handleAddTodo}>입력</button>
    </div>
  );
};

export default TodoArea;
