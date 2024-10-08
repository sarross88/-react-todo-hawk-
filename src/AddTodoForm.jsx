import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel.jsx";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setNewTodo] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setNewTodo(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
        ADD NEW TODO :
      </InputWithLabel>

      <button type="submit">Add</button>
    </form>
  );
}
