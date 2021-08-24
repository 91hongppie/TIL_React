/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '재밌는 영화 추천']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}>❤️</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/> 
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/> 
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/> 
      </div>
    </div>
  );
}

export default App;
