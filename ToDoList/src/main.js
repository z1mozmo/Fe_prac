/*
이제 필요없는 데이터라서 지운다. */
// const data = [
//     {text: '자바스크립트 공부하기'},
//     {text: '자바스크립트 복습하기'}
// ]


//todos라는 key를 가진 값을 불러온다.
const initialState = storage.getItem('todos', [])

const $app = document.querySelector('.app');

new App({
    $target: $app,
    initialState
})
