//전역 오염을 막기 위해 IIFE를 사용한다.
const storage = (function(storage){
    const setItem = (key, value) => {
        try {
            storage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }
    
    const getItem = (key, defaultValue) => {
        try {
            const storedValue = storage.getItem(key)

            if (storedValue) { //storedValue가 있으면
                return JSON.parse(storedValue)
                //만약 storedValue가 파싱할 수 없는 값일 경우 error가 발생해서
                //catch에 있는 return defaultValue가 작동할 것이다.
            }
            //값이 없으면
            return defaultValue
        } catch (error) { //에러가 발생됐을 때 실행된다.
            console.log(error)
            return defaultValue
        }
    } 

    return { //함수를 호출했을 때 setItem과 getItem을 실행한다.
        setItem,
        getItem
    }
})(window.localStorage)