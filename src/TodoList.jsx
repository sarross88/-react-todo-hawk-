const todoList = [
    {
      title: 'Read Assignment',
      id: 1,
    },
    {
      title: 'Complete Assignment',
      id: 2,
    },
    {
        title: 'Study Material',
        id: 3,
      },
  ];
  

const TodoList = () => {
        <ul>{todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          </ul>
}

export default TodoList;