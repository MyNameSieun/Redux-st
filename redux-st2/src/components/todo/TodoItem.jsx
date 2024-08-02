import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo, switchTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newBody, setNewBody] = useState(todo.body);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(updateTodo(todo.id, newTitle, newBody));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleSwitch = () => {
    dispatch(switchTodo(todo.id));
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleEditToggle}>취소</button>
          <Link to={`/detail/${todo.id}`}>상세</Link>
        </>
      ) : (
        <>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.body}</p>
          <button onClick={handleEditToggle}>수정</button>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleSwitch}>
            {todo.isDone ? "취소" : "완료"}
          </button>
          <Link to={`/${todo.id}`}>상세</Link>
        </>
      )}
    </div>
  );
};

export default TodoItem;
