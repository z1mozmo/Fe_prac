// params.$target - 해당 컴포넌트가 추가될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
function ToDoList({ $target, initialState }) {
  //앞에 $로 표시한 변수는 DOM객체를 담고있는 변수라는 의미로 사용한다.
  const $todoList = document.createElement('div');
  $target.appendChild($todoList);

  this.state = initialState;

  this.render = () => {
    //this.state = [{ text: '자바스크립트 공부하기' }, { text: '...' }]

    $todoList.innerHTML = `
    <ul>
      ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
    </ul>
    `

    /* for문을 이용할 수도 있지만 render 함수가 복잡해질 수록 
       html 이라는 변수에 의존도가 높아지고 복잡해질 수 있다.

    let html = '';
    for (let i = 0; i < this.state.length; i++) {
      html += `<li>${this.state[i].text}</ii>`
    }
    html = `<ul>${html}</ul>`

    $todoList.innerHTML = html;
    */
  }
  this.render(); //component가 생성되자마자 앞서 작성된 코드들을 화면에 그려준다.
}