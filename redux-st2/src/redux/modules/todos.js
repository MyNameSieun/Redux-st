// import uuid from "react-uuid";
import shortid from "shortid";

// 액션 객체 type value 상수로 지정
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// action creator 생성
export const addTodo = (title, body) => ({
  type: ADD_TODO,
  payload: {
    id: shortid.generate(),
    title,
    body,
    isDone: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const switchTodo = (id) => ({
  type: SWITCH_TODO,
  payload: id,
});

export const updateTodo = (id, title, body) => ({
  type: UPDATE_TODO,
  payload: { id, title, body },
});

// 초기 상태 값
const initialState = [
  {
    id: shortid.generate(),
    title: "타이틀",
    body: "내용",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "타이틀2",
    body: "내용2",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );

    case UPDATE_TODO:
      const { id, title, body } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, title, body } : item
      );

    default:
      return state;
  }
};

export default todos;
