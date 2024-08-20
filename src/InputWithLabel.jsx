import {useEffect, useRef} from 'react';

export default function InputWithLabel (props) {
    //useRef will store dom Elements in state 
    //useRef won't cause re-enders 
    const inputRef = useRef();

    //this is the actual 
    console.log(inputRef.current);

    //worded wierd question 
    useEffect(()=>{
        inputRef.current.focus()
    });

    return (
        <>
<label htmlFor="item">{props.children}</label>
  <input 
  value={props.newTodo} 
  onChange={props.handleTitleChange} 
  type="text" 
  id="item"
  ref={inputRef}
  /> 
        </>
    );
}