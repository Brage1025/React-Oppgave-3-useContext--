import { useTodo } from "../context/TodoContext";
import { useState } from "react";

export default function AddTodo() {
  const { addTodo: onAdd } = useTodo();
  const [text, setText] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={addNewTodo} action={""}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button class="submit-btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
