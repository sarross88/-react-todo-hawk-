import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import  AddTodoForm from "./AddTodoForm.jsx";
import {Routes, Route, Link} from 'react-router-dom';
// import axios from 'axios';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  //calls this addCat 
  async function addData(todoTitle){
    const newTodoData = {
      title: todoTile
    }

    const options = {
        method: "POST",
        headers: {
          Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        },
        body: JSON.stringify(newTodoData)
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    try{
      const response = await fetch(url, options);
        if(!response.ok){
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log('your data', data);
    }
    catch(error){
      console.log(error.message)
      return null;
    }
  }


  async function fetchData(){
    const options = {
        method: "GET",
        headers: {
          Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        },
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    try{
      const response = await fetch(url, options);
        if(!response.ok){
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log('your data', data);
        const todos = data.records.map((item) => {
            return{
              id: item.id,
              title: item.fields.Title,
            };
        });
        console.log('air table todos',todos);
        setTodoList(todos);
        setIsLoading(false);
    }
    catch(error){
      console.log(error.message)
      return null;
    }
  }

      //only runs once core value 
  useEffect(()=>{
    fetchData();
  }, []);


  //if you use a state variable, must declare it in the returned array 
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
    <nav>
      <div>logo</div>
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/new">home</Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
    <Route path="/" element={
         <div id='main'>
         <section id='app-content'>
         <h1>TODO APP</h1>
         <AddTodoForm onAddTodo={addTodo} />
         {isLoading ? (<p>Loading....</p>) 
         : (<TodoList onRemoveTodo={removeTodo} todoList={todoList} />)}
         </section>
         </div>
    }/>
    <Route path='/new'><h1>New Todo List</h1></Route>
      </Routes>
    </>
  );
}

export default App;