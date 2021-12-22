import { useState } from 'react';
import './App.css';

function App() {

  const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학'])
  const [따봉, 따봉변경] = useState([0, 0, 0])
  const [모달, 모달변경] = useState(false)
  const [누른제목, 누른제목변경] = useState(0)
  const [입력값, 입력값변경] = useState('')
  // const posts = '강남 고기 맛집'

  function 글추가() {
    글제목변경([입력값, ...글제목])
    따봉변경([0, ...따봉])
  }

  function 모달바꾸기(idx) {
    if (idx === 누른제목) {
      모달변경(!모달)
    }
    누른제목변경(idx)
  }

  function 따봉바꾸기(idx) {
    const 뉴따봉 = [...따봉]
    뉴따봉[idx] += 1
    따봉변경(뉴따봉)
  }

  function 반복된UI() {
    const 어레이 = []

    for (let i = 0; i<3; i++) {
      어레이.push(<div>안녕</div>)
    }

    return 어레이;
  }
  // function 제목바꾸기() {
  //   var newArray = [...글제목]
  //   newArray[0] = '여자코트 추천' 
  //   글제목변경(newArray)
  // }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      {
        글제목.map((e, i) => {
          return (
            <div className='list' key={i}>
              <h3 onClick={ () => { 모달바꾸기(i) } }>{ e }<span onClick={ () => { 따봉바꾸기(i) } }>👍</span> { 따봉[i] }</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={ (e) => 입력값변경(e.target.value)}/>
        <button onClick={ 글추가 }>저장</button>
      </div>


      { 모달 ? <Modal 글제목={ 글제목 } 누른제목={ 누른제목 } /> : null }
     
    </div>
    )
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>제목: { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
