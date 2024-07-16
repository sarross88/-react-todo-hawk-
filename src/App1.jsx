import React, { useState } from 'react';


const App2 = () => {
  const todoList = [
    {
      title: 'Read for Assignment',
      id: 1,
    },
    {
      title: 'Study Material',
      id: 2,
    },
    {
        title: 'Complete Assignment ',
        id: 3,
      },
  ];

  const handleOnAddTodo = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleOnAddTodo} />
      <hr />
      <p>{newTodo}</p>
      <TodoList list={todoList} />
    </div>
  );
};

const AddTodoForm = (props) => {
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (event) => {
    event.preventDefault()
    const todoTitle = event.target.title.value;
    setNewTodo(event.target.value);
    props.onAddTodo(todoTitle);
  };

  return (
    <div>
        <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input name='title' id="todoTitle" type="text" />
      <button type='submit'>Add</button>
      </form>
    </div>
  );
};

const TodoList = (props) => (
  <ul>
    {props.list.map((todo) => (
      <TodoListItem key={todo.id} item={todo.title} />
    ))}
  </ul>
);

const TodoListItem = (props) => (
   <li>{props.todo.title}</li>
);

export default App;