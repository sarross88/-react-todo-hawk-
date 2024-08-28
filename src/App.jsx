import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import  AddTodoForm from "./AddTodoForm.jsx";
import {Routes, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
// import axios from 'axios';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  //calls this addCat 
  async function addTodo(newTodoTitle){
    const options = {
        method: "POST",
        headers: {
          Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                title: newTodoTitle,
              },
            },
          ],
        }),
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    try{
      const response = await fetch(url, options);
        if(!response.ok){
          throw new Error(`${response.status}`);
        }
       const data = await response.json();

       const newTodo = {
        title: data.records[0].fields.title,
        id: data.records[0].id
       }
        setTodoList((prevTodoList)=>[newTodo, ...prevTodoList]);
    }
    catch(error){
      console.log(error.message)
      return null;
    }
  }


  async function getData(){
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
    getData();
  }, []);



  function removeTodo(id) {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodoList);
  }

  return (


    <BrowserRouter>
    <Routes>
    <nav>
      <div>logo</div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New List</Link></li>
        </ul>
      </div>
    </nav>
      <Switch>
    <Route path="/" element={
           <div id='main'>
           <section id='app-content'>
           <h1>TODO APP</h1>
           <AddTodoForm onAddTodo={addTodo} />
           {isLoading ? (<p>Loading....</p>) 
           : (<TodoList onRemoveTodo={removeTodo} todoList={todoList} />)}
           </section>
           </div>
    }></Route>
    <Route path='/new' element={<h1>New Todo List</h1>}></Route>
    </Switch>
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;