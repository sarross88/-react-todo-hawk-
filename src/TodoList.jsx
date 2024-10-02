// This is a component
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
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

