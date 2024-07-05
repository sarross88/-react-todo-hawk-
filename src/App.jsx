import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'


function App() {

  return (
    <div>
     <h1>Todo List</h1>
   <AddTodoForm></AddTodoForm>
   <TodoList></TodoList>
   </div>
  )
}

export default App;
