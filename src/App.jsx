import { useEffect, useState } from "react"
import "./App.css"
import { AddTodoForm } from "./AddTodoForm"
import {TodoList} from "./TodoList"

function App() {
  //HOOK useState - cont redefine newItem, need to call the function but NOT inside the function 
//todos=todoList setTodos= setTodoList
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList])

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
