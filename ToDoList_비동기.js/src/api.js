// api.js의 경우 컴포넌트 하나만 적어두지 않고 여러 개를 적어두기 때문에
// export default하지 않고 export로 적어주고 하나씩 따로 꺼내쓴다.
export function request (url, successCallback, failCallback) {
    const xhr = new XMLHttpRequest() // XMLHttpRequest는 요즘엔 잘 쓰이지 않는다.
    xhr.addEventListener("load", (e) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successCallback(JSON.parse(xhr.responseText))
            } else {
                failCallback(xhr.statusText)
            }
        }
    })
    xhr.addEventListener('error', (e) => failCallback(xhr.statusText))

    xhr.open('GET', url)
    xhr.send()
}