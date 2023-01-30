function ToDoForm( {$target} ) {
  //입력받을 form을 생성한다.
  const $form = document.createElement('form');

  //선택한 $form을 $target에 불여준다.
  $target.appendChild($form);

  let isInit = false 

  this.render = () => {
    $form.innerHTML = `
      <input type = 'text' name = 'todo' />
      <button>Add</button>
    `
    if (!isinit) { //true일 때만 실행하도록, 즉 맨 처음에만 작동
      $form.addEventListener('submit', e => {
        //preventDefault(): 태그의 고유 기능을 끄는 코드
        //여기서는 form 태그의 기본 새로고침 기능을 끈다.
        e.preventDefault()
      
        const text = $form.querySelector('input[name=todo').value
      })
      isInit = true; //true로 바꿔주면 이후부턴 if문의 명령이 동작하지 않는다.
    }
  }

  this.render() //마지막으로 render 함수를 호출
}