const todoList = [
    {
        id: 1,
        title: 'Read Material'
    },
    {
        id: 2,
        title: 'Do assignment'
    },
    {
        id: 3,
        title: 'Study Material'
    },
];

const TodoList = () => {
        <ul>{todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          </ul>
}

export default TodoList;