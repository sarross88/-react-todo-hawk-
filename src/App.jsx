import './App.css';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import TodoListItem from './TodoListItem.jsx'


function App() {

  return (
    <div>
     <h1>Todo List</h1>
   <AddTodoForm/>
   <TodoList/>
   </div>
  )
}

export default App;
