import {TodoListItem} from './TodoListItem'

export function TodoList({todoList, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
  {todoList.length === 0 && "No todo's yet"}
  {todoList.map((todo) => {
    return (
     <TodoListItem 
     id={todo.id} 
     completed={todo.completed} 
     title={todo.title} 
     key={todo.id} 
     toggleTodo={toggleTodo} 
     deleteTodo={deleteTodo}>
     </TodoListItem>)
  })}
  
</ul>
    )
}