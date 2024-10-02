import { useEffect, useRef } from "react";

export function InputWithLabel(props) {
  // useRef can be used to store DOM elements in state
  // Unlike variables from useState, ref's don't cause re-renders
  const inputRef = useRef();

  console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todo">{props.children}</label>
      <input
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        name="type"
        id="todo"
        ref={inputRef}
      />
    </>
  );
}