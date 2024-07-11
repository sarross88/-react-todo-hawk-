import * as React from 'react';

const App = () => {
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

  const handleAddTodo = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <hr />
      <p>{newTodo}</p>
      <TodoList list={todoList} />
    </div>
  );
};

const AddTodoForm = (props) => {
  const [newTodo, setNewTodo] = React.useState('');

  const handleSubmit = (event) => {
    setNewTodo(event.target.value);
    props.onAddTodo(event);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
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