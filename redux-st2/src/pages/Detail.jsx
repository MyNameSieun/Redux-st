import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    // Handle case where todo is not found
    return <p>Todo not found</p>;
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    navigate("/");
  };

  return (
    <div>
      <h1>상세 보기</h1>
      <p>
        <strong>제목:</strong> {todo.title}
      </p>
      <p>
        <strong>내용:</strong> {todo.body}
      </p>
      <p>
        <strong>완료 여부:</strong> {todo.isDone ? "완료" : "미완료"}
      </p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default Detail;
