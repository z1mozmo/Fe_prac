import ToDoList from './ToDoList.js'
import TodoComments from './TodoComments.js';
import { request } from './api.js';

export default function App({ $app }) {
  this.state = {
    todos: [] ,
    selectedTodo: null,
    comments: []
<<<<<<< HEAD
  }

  const setState = nextState => {
    this.state = nextState
    todoList.setState(this.state.todos)
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments
    })
=======
>>>>>>> fb49048476b363c761d4430480f615fd39bd4550
  }


  const setState = nextState => {
    this.state = nextState
    todoList.setState(this.state.todos)
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments
    })
  }


  const todoList = new ToDoList({
    $target: $app,
    initialState: this.todos,
    onClick: id => {
      const selectedTodo = this.state.todos.find(todo => todo.id === id)
      this.setState({
        ...this.state,
        selectedTodo
      })

      //댓글 목록 불러오기
      request(`https://kdt.roto.codes/comments?todo.id=${id}`, (comments) => {
        this.setState({
          ...this.state,
          comments
        })
      })
    }
  })

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments
    }
  });

  //todos 불러오기
  this.init = () => {
    request('https://kdt.roto.codes/todos', (todos) => {
      this.setState({
        ...this.state,
        todos
      })
    })
  }
  this.init()

}
