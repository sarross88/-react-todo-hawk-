export default function TodoListItem({ title, onRemoveTodo, id, }) {
  return (
    <li>
      <div>{title}</div> <div><button onClick={() => onRemoveTodo(id)}>Delete</button></div>
    </li>
  );
}