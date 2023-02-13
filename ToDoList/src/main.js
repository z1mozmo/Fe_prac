import App from './App.js'
import { getItem } from './storage.js';

//변경 전: const initialState = storage.getItem('todos', [])
//위에서 getItem만 꺼내왔으니까 storage를 지워주고 getItem만 사용한다.
const initialState = getItem('todos', [])

const $app = document.querySelector('.app');

new App({
    $target: $app,
    initialState
})
