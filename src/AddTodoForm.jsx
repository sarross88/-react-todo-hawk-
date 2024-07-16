
//aka Search in hacker stories 
const AddTodoForm = (props) => {
    
    //like handleChange in hacker stories
    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        // props.onAddTodo(todoTitle)
        setNewTodo(event.target.value)
        props.onAddTodo(event)
    };

    return (
        <div>
        <form  onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input name="title" id="todoTitle" type="text" />
        <button type='submit'>Add</button>
        </form>
        </div>
        )

}

export default AddTodoForm;

// 1 Add a name attribute to the text input with value title
//2 functional component, above the return statement, 
//create a new function called handleAddTodo that takes event as a parameter
// First, inside this function, prevent the default behavior of the form submit
//Next, retrieve the value of the title element from the event target and store it in a variable named todoTitle
//Log the value of todoTitle in the console
//Finally, reset the form so the text input value is cleared

//each HTML EVENT on methods - give DIFFERENT OBJECTS 
//W3 Schools HTML Event Attributes - window event attributes