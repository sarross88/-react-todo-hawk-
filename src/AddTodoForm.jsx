import { useState } from 'react'

export function AddTodoForm({onAddTodo}){
    const [newTodo, setNewTodo] = useState('')

    function handleTitleChange(e){
        return setNewTodo(e.target.value)
    }

    function handleAddTodo(e){
        //stops from refreshing 
        e.preventDefault()
        // setTodos((currentTodos)=>{
        //   return([...currentTodos, 
        //     {id: crypto.randomUUID(), title: newTodo, completed: false}, ])
        // })
        if(newTodo === ""){return }
        onAddTodo(newTodo)
        setNewTodo('')
      }
    return(
        <form onAddTodo={handleAddTodo} className="new-item-form">
<div className="form-row">
<h1 className="header">Todo List App Generator</h1>
  <label htmlFor="item">New Item</label>
  <input 
  value={newTodo} 
  onChange={handleTitleChange} 
  type="text" 
  id="item">
  </input>
</div>
<button className="btn">Add</button>
</form>
    )
}


// onAddTodo   his onSubmit={addTodo}