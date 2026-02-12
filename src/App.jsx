import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function App() {
  return (
    <>
      <h1>TodoApp</h1>
      <AddTodo />
      <TodoList />
      <ThemeSwitcher />
    </>
  );
}

export default App;
