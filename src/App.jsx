import './App.css'

let todoList = [
  {
id: 1,
title: 'Read and Watch Videos',
},
{
id: 2,
title: 'Complete Assignment',
},
{
id: 3,
title: 'Study Material',
}]; 


function App() {

  return (
    <div>
     <h1>Todo List</h1>
     <ul>{todoList.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}</ul>
   </div>
  )
}

export default App
