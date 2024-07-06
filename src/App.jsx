import './App.css';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';


function App() {
  const todoList = [
    {
      title: 'Read Assignment',
      id: 1,
    },
    {
      title: 'Complete Assignment',
      id: 2,
    },
    {
        title: 'Study Material',
        id: 3,
      },
  ];
  
  return (
    <div>
     <h1>Todo List</h1>
   <AddTodoForm/>
   <TodoList list={todoList} title= 'Current Todos'/>
   </div>
  )
}

export default App;
