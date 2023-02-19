//나중에 문제가 생겼을 때 api요청이 잘못된 것인지 렌더링이 잘못된 것인지
//파악하기 쉽도록 처음부터 api를 사용하지 않고
//렌더링부터 잘 되는지 확인하고 api를 붙이는 것이 좋다.

export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement('select')

  $target.appendChild($select)

  /*
  상품옵션 이름 렌더링 시 상품명+옵션명+재고:n개 이런 형식으로 보여줘야 한다.
  재고가 0인 상품의 경우 옵션을 선택하지 못하게 한다.

  {
    optionId: 1,
    optionName: '옵션 상품',
    optionPrice: 1000,
    stock: 10
  }
  */

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const createOptionFullName =  ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice}` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고 없음'} }`
  }

  $select.addEventListener('change', (e) => {
    const optionId = parseInt(e.target.value)

    const option = this.state.find(option => option.optionId === optionId)

    if (option) {
      onSelect(option)
    }
  })


  this.render = () => {
    //배열이 아닌 것으로 map을 돌렸다간 오류가 발생하기 때문에
    //배열이 맞을 때 작동하도록 한다.
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        ${this.state.map(option => `<option ${option.stock === 0 ? 'disabled' : ''} value ="${option.optionId}">${createOptionFullName(option)}</option>`).join('')}
      `
    }
  }

  this.render()
}