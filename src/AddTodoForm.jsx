import React from 'react'
//newTodo with update function named setNewTodo
//aka Search in hacker stories 
const AddTodoForm = (props) => {
    //stateful changes - useState - returns an array with two items, 
    //takes an inital value of the state aka 'newTodo' and a function to get new state 'setNewTodo'
    //nothing happens initially until setNewTodo function is fired 
    //React.useState(''), inside ('') can be the initial value, ex video is hello 
    //inside of handleAddTodo we need to deal with the state 

    //This is just a fucntion, the new things get saved after called, not intially
    //like handleChange in hacker stories
    const handleAddTodo = (event) => {
        //this is not a browser event, these are React object options
        // console.log(event)
        event.preventDefault()
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle)
        event.target.title.value = ""

        // setNewTodo(event.target.value);
        // props.onAdd(event);


        // console.log(event.target.value)
        //QUESTION prevent default behavior ??????
        //QUESTION todoTitle??? 
    }
    //what gets passed into an event, react passes an event object
    // const handleMouseOver = (event) => {
    //     console.log(event)
    // }
    return(
        <div>
        <form  onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input name="title" id="todoTitle" type="text" />
        <button type='submit'>Add</button>
        </form>

        {/* <p>
            Todo item: <strong>{newTodo}</strong>.
        </p> */}
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