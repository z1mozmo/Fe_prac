export default function ToDoList({ $target, initialState }) {
    const $todoList = document.createElement('div');
   
    $target.appendChild($todoList);

    this.state = initialState;

    this.setState = nextState => {
      this.state = nextState; //현재상태를 다음상태로 바꾸고
      this.render(); //바뀐 상태로 렌더링한다.
    }

    this.render = () => {
      $todoList.innerHTML = `
      <ul> 
        ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
      </ul>
      `
    }
    this.render();
  }