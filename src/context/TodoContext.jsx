import { createContext, useContext, useState } from "react";

// Making the context creator
const TodoContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => useContext(TodoContext);

// The provider for context
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //Making an array and adding a new todo
  const addTodo = (text) => {
    if (text.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: text,
          done: false,
        },
      ]);
    }
  };

  // Checks if the todo is true or false
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  // Removes todo from the list
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Provider of objects  for values
  const providerObject = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };

  // Returning the TodoContext to be used as a provider
  return (
    <TodoContext.Provider value={providerObject}>
      {children}
    </TodoContext.Provider>
  );
};
