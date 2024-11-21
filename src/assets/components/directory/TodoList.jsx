import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func, 
}

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} onRemoveTodo={onRemoveTodo} id={todo.id} />
      ))}
    </ul>
  );
}






