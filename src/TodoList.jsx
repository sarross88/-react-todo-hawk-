// This is a component
import TodoListItem from "./TodoListItem"

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
        {todoList.length === 0 && "No todo's yet"}
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          title={todo.title}
          onRemoveTodo={onRemoveTodo}
          id={todo.id}
        />
      ))}
    </ul>
  );
}


