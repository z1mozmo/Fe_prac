//중복되는 코드들은 api.js에 담는다.

/* api서버가 개발서버, qa서버, 운영서버 등이 있는데
도메인을 개발서버로 줄 지, 운영서버로 줄 지 등을 결정해서
앞부분에 도메인만 따로 상수로 작성해서 이용한다. */
const API_END_POINT = 'https://kdt.roto.codes'

export const request = (url) => {
  return fetch(`${API_END_POINT}/${url}`)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
      throw new Error(`${res.status} Error`)
    })
    .catch(e => alert(e.message))
}