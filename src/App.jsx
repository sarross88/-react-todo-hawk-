import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import  AddTodoForm from "./AddTodoForm.jsx";



function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingTodos = JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
        const objectTodo = {
          data: { 
            todoList : existingTodos,
          },
        };
        resolve(objectTodo)
      }, 2000);
    }).then((result)=>{
      const retrievedTodoList = result.data.todoList;
      setTodoList(retrievedTodoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [todoList, isLoading]);



  function addTodo(newTodo) {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  }

  function removeTodo(id) {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodoList);
  }

  return (
    <>
      <div id='main'>
      <section id='app-content'>
      <h1>TODO APP</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (<p>Loading....</p>) 
      : (<TodoList onRemoveTodo={removeTodo} todoList={todoList} />)}
      </section>
      </div>
    </>
  );
}

export default App;