export default function ToDoForm({ $target, onSubmit }) {
    const $form = document.createElement('form');
    $target.appendChild($form);
  
    let isInit = false;

    this.render = () => {
      $form.innerHTML = `
        <input type = 'text' name = 'todo' />
        <button>Add</button>
      `

      if (!isInit) {
        $form.addEventListener('submit', e => {
          e.preventDefault()
        
          const $todo = $form.querySelector('input[name=todo]')
          const text = $todo.value

          if (text.length > 1) { //입력된 값이 최소 두 글자일 때
            $todo.value = '' //input 창에 입력된 값을 비워준다.
            onSubmit(text);
          }
        })
        isInit = true;
      }
    }
  
    this.render()
  }

