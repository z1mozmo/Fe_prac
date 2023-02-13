import ToDoList from './ToDoList.js'
import TodoComments from './TodoComments.js';

export default function App({ $app }) {
  this.state = {
    todos: []
  }

  const todoList = new ToDoList({
    $target: $app,
    initialState: this.todos
  })

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: {
        text: "Learn JavaScript",
      },
      comments: [
        {
          text: "안녕하세요",
        },
        {
          text: "반가워요",
        },
      ],
    },
  });
}
