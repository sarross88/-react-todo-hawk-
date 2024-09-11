import style from './TodoListItem.module.css'
// eslint-disable-next-line react/prop-types
export default function TodoListItem({ title, onRemoveTodo, id, }) {
  return (
    <li className={style.ListItem}>
      <div>{title}</div> <div><button onClick={() => onRemoveTodo(id)}>Delete</button></div>
    </li>
  );
}