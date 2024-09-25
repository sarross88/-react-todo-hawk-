import style from './TodoListItem.module.css'
import PropTypes from 'prop-types'

TodoListItem.propTypes = {
  title: PropTypes.string, 
  onRemoveTodo: PropTypes.func, 
  id: PropTypes.string,
}

export default function TodoListItem({ title, onRemoveTodo, id, }) {
  return (
    <li className={style.ListItem}>
      <div>{title}</div> <div><button onClick={() => onRemoveTodo(id)}>Delete</button></div>
    </li>
  );
}