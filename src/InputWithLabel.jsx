/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export function InputWithLabel(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoType">{props.children}</label>
      <input
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        name="type"
        id="todoType"
        ref={inputRef}
      />
    </>
  );
}