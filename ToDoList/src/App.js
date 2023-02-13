import Header from "./Header.js"
import ToDoForm from "./ToDoForm.js"
import ToDoList from "./ToDoList.js"
import { setItem } from "./storage.js"

export default function App ({ $target, initialState }) {
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
            
            //변경 전: storage.setItem('todos',JSON.stringify(nextState))
            setItem('todos',JSON.stringify(nextState))
        }
    })
    
    const todoList = new ToDoList({
        $target,
        initialState
    })   
}