export default function ToDoList({ $target, initialState }) {
  const $todoList = document.createElement('div');
 
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState; 
    this.render();
  } 

  this.render = () => {
    $todoList.innerHTML = `
    <h1>Simple ToDoList</h1>
    <ul> 
      ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
    </ul>
    `
  }
  this.render();
}