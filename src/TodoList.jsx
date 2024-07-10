import React from 'react';
import TodoListItem from './TodoListItem.jsx';

//called todos
const todoList = [
    {title: 'Read Assignment', id: 1},
    {title: 'Complete Assignment', id: 2},
    {title: 'Study Material', id: 3,},
  ]
  

//List in hacker stories - props conventionally named, props is an object with list as a property
//IMPORTANT PROPS RULES 
//1- no mutating props- treated like const, 
//2- all props get combined into a single props into single object 
//3- Each component instance can have different values for the props 
//pass props down more than one level 
const TodoList = (props) => {
    const onAddTodo = props.onAddTodo
   const handleSubmit = (event) =>{
    event.preventDefault()
    onAddTodo([...todoList, {id:4, title:"newest"}])
   }
    return(
       <ul>
        {todoList.map((todo) => { <TodoListItem key={todo.id} todo={todo}/>})}
      </ul>
    )
}

export default TodoList;

//LIST in hacker stories 
//add props - pass down likes html attributes or function attributes, pass values into react components 