
import { useState } from "react";
import PropTypes from 'prop-types'
import { InputWithLabel } from "./InputWithLabel.jsx";

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}

export default function AddTodoForm({ onAddTodo }) {
  
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel 
      todoTitle={todoTitle} 
      handleTitleChange={handleTitleChange}>
        ADD NEW TODO :
      </InputWithLabel>

      <button type="submit">Add</button>
    </form>
  );
}
