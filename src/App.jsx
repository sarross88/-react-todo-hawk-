import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Switch, Link } from "react-router-dom";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import styles from "./App.css";
// import axios from 'axios';

const BASE_URL = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  async function removeTodo(todoId) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
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
        throw new Error("Todo is not there to be deleted");
      }
      setTodoList((previousTodoList) => {
        previousTodoList.filter((todo) => todo.id !== data.id);
      });
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async function addTodo(newTodoTitle) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
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

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(BASE_URL, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.title,
        };
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  //only runs once core value
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <nav>
          <div>logo</div>
          <div>
            <ul className={styles.styledNav}>
              <li className={styles.nav_link}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/new">New List</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route
            path="/"
            element={
              <body className={styles.bodyBackground}>
                <main>
                  <h1 className={styles.playwrite}>Todos</h1>
                  <AddTodoForm onAddTodo={addTodo} />
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
                  )}
                </main>
              </body>
            }
          />
          <Route path="/new" element={<h1>New Todo List</h1>} />
        </Switch>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
