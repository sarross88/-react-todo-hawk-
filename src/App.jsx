import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';


function App() {

const [newTodo, setNewTodo] = useState('')

  return (
    <div>
     <h1>Todo List</h1>
     {/* //onAddTodo, setNewTodo */}
   <AddTodoForm onAddTodo={handleAddTodo}/>
   <p>{newTodo}</p>
   <TodoList/>
   </div>
  )
}

export default App;

//onAdd can be anything, jsut use the word 'on'
//CTD want onSubmit 


//// <AddTodoForm onAddTodo={handleAddTodo}/> 