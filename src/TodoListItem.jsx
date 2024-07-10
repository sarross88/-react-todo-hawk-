//called Item on hacker stories 
//control d edit multiple values to add props to each
//WRITE PROPS differently - syntax 3 ways 
    //way 1 const TodoListItem = ({item}) => {
const TodoListItem = (props) => {
    // way 2 can do this and uninclude the props below
    // const item = props.item;
    // way 3 OR object destructuing 
    // const {item} = props;
return(
    <li>{props.todo.title}</li>
)
}

export default TodoListItem;

//add props 
//PROPS -static, cant change, wont help changing, need state!!!
