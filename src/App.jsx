import { useEffect, useState } from "react"
import "./App.css"
import { AddTodoForm } from "./AddTodoForm"
import {TodoList} from "./TodoList"



const useSemiPersistentState = (key) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]);

  return [value, setValue]
}



function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(title) {
    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }


  function toggleTodo(id, completed){
    setTodoList(currentTodos =>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodoList(currentTodos =>{
      return currentTodos.filter((todo)=> { return(todo.id !== id)})
    })
  }

return(
  <>
<AddTodoForm 
onAddTodo={addTodo}>
</AddTodoForm>
<h2 className="header">Todo List :</h2>
<TodoList 
todoList={todoList} 
toggleTodo={toggleTodo} 
deleteTodo={deleteTodo}>
</TodoList>
  </>
)
}
export default App
