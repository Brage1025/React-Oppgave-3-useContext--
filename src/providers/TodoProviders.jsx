import { TodoProvider } from "../context/TodoContext";
import TodoApp from "../TodoApp";

export default function TodoProviders() {
  return (
    <>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </>
  );
}
