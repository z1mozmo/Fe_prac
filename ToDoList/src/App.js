function App ({ $target, initialState }) {
    new Header({
        $target,
        text: 'Simple ToDo List'
    })
    
    new ToDoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, {
                text
            }]
            todoList.setState(nextState)

            storage.setItem('todos',JSON.stringify(nextState))
        }
    })
    
    const todoList = new ToDoList({
        $target,
        initialState
    })   
}