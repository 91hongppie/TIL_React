/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '재밌는 영화 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false)
  let [누른제목, 누른제목변경] = useState(0)
  var ar = [2, 3, 4]

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)
  }

  function 따봉바꾸기(idx) {
    let newArray = [...따봉]
    newArray[idx] += 1
    따봉변경(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      {
        글제목.map((value, idx) => {
          return ( <div className="list">
              <h3 onClick={ () => { 누른제목변경(idx) } }>{ value } <span onClick={ () => { 따봉바꾸기(idx) } }>하트</span>{ 따봉[idx] }</h3>
              <p>2월 {17 + idx}일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <button onClick={ () => {modal변경(!modal)} }>버튼</button>
      {
        modal === true
        ? <Modal 글제목={ 글제목 } 누른제목={ 누른제목 }/>
        : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
