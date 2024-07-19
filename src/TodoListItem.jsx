export function TodoListItem({id, completed, title, toggleTodo, deleteTodo}){
 
    return( <li>
        <label>
          <input 
          type="checkbox" 
          checked={completed}
          onChange={(e)=>{
            return(
              toggleTodo(id, e.target.checked)
            )
          }}
          ></input>
          {title}
        </label>
        <button 
        onClick={()=> deleteTodo(id)} className="btn btn-danger"
        >Delete</button>
      </li>)
}