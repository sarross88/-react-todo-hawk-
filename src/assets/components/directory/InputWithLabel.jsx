import { useEffect, useRef } from "react";
import PropTypes from 'prop-types'

InputWithLabel.propTypes = {
 todoTitle : PropTypes.string, 
 handleTitleChange: PropTypes.func,
//  children: JSX.Element,
}

export function InputWithLabel({children, todoTitle, handleTitleChange}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoType">{children}</label>
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        name="type"
        id="todoType"
        ref={inputRef}
      />
    </>
  );
}