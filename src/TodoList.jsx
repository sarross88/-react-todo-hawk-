import TodoListItem from './TodoListItem.jsx'

//aka stories, this is globally, cant alter, solution is props 
// const todoList = [
//     {
//       title: 'Read Assignment',
//       id: 1,
//     },
//     {
//       title: 'Complete Assignment',
//       id: 2,
//     },
//     {
//         title: 'Study Material',
//         id: 3,
//       },
//   ];
  

//List in hacker stories - props conventionally named, props is an object with list as a property
//IMPORTANT PROPS RULES 
//1- no mutating props- treated like const, 
//2- all props get combined into a single props into single object 
//3- Each component instance can have different values for the props 
const TodoList = (props) => {
    return(
        <div>
        <h3>{props.title}</h3>
       <ul>
        {props.list.map((item) => {
            return (            
                // is it key and item here?
                <TodoListItem key={item.id} item={item}/>
            )
        }

      )}
      </ul>
      </div>
    )
}

export default TodoList;

//LIST in hacker stories 
//add props - pass down likes html attributes or function attributes, pass values into react components 