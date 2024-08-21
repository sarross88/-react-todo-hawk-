import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import  AddTodoForm from "./AddTodoForm.jsx";



function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData(){
    const  id = import.meta.env.VITE_AIRTABLE_BASE_ID;
    console.log(`id: ${id}`);
    const  apiKey = import.meta.env.VITE_AIRTABLE_API_TOKEN;
    console.log(`key: ${apiKey}`);
    const  tableName = import.meta.env.VITE_TABLE_NAME;
    console.log(`Table name: ${tableName}`);

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
      //this error is set by the above error 
      console.log(error)}
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