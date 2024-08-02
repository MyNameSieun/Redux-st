import TodoArea from "../components/todo/TodoArea";
import TodoList from "../components/todo/TodoList";

const Home = () => {
  return (
    <div>
      <TodoArea />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
};

export default Home;
