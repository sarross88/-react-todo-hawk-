import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import ToggleSwitch from './ToggleSwitch.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const BASE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
const TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //REMOVE A TODO
  async function removeTodo(todoId) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const url = `${BASE_URL}/${todoId}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      if (!data.deleted) {
        throw new Error("Todo can't be deleted");
      }

      setTodoList((previousTodoList) =>
        previousTodoList.filter((todo) => todo.id !== data.id)
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

//add data to airtable
async function addTodo(newTodoTitle) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
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

  try {
    const response = await fetch(BASE_URL, options);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();

    const newTodo = {
      title: data.records[0].fields.title,
      id: data.records[0].id,
    };

    setTodoList((prevTodoList) => [newTodo, ...prevTodoList]);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}



  //this function changes the state 
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      // const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
      const query1 = '?view=Grid%20view&sort[0][field]=Title';
      const query2= '&sort[0][field]=title';
      const query3 = '&sort[0][direction]=asc';
      const urlSpecial = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}${query1+query2+query3}`
      const response = await fetch(urlSpecial, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => {
        return { id: todo.id, title: todo.fields.title };
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  //empty array makes it only run once when app first runs, NO await needed 
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <main>
         <h1>Todos</h1>
         <AddTodoForm onAddTodo={addTodo} />
         {isLoading ? (
           <p>Loading...</p>
         ) : (
          <>
          <ToggleSwitch/>
           <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
           </>
         )}
       </main>
      }
    />
    <Route path="/new" element={<h1>New Todo List</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;