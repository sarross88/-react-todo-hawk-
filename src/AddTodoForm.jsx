import { useState } from 'react'
import {InputWithLabel} from './InputWithLabel'

export default function AddTodoForm({ onAddTodo }) {
    const [newTodo, setNewTodo] = useState('')

    function handleTitleChange(e){
        const newTodoTitle = e.target.value;
        return setNewTodo(newTodoTitle)
    }

    function handleAddTodo(e){
        //stops from refreshing 
        e.preventDefault()
        if(newTodo === ""){return}
        const newTodoItem ={
          title: newTodo,
          id: Date.now(),
        };
        onAddTodo(newTodoItem);
        setNewTodo("");
      }

    return(
        <form onSubmit={handleAddTodo} className="new-item-form">
<div className="form-row">
<h1 className="header">Todo List App Generator</h1>
<InputWithLabel newTodo={newTodo} handleTitleChange={handleTitleChange}> Title: 
</InputWithLabel>
</div>
<button className="btn">Add</button>
</form>
    );
}


// onAddTodo   his onSubmit={addTodo}