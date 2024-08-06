import {TodoListItem} from './TodoListItem'

export function TodoList({todoList, toggleTodo, deleteTodo}) {
  return (
    <ul>
        {todoList.length === 0 && "No todo's yet"}
      {todoList.map((todo) => (
        <TodoListItem
          completed={todo.completed} 
          key={todo.id}
          title={todo.title}
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
          id={todo.id} 
        />
      ))}
    </ul>
  );
}

