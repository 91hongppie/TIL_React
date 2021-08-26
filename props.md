# props

## props를 쓰는 이유

- \<App>이라는 컴포넌트 안에 \<Modal>이라는 컴포넌트를 만들었을 때 App은 부모 컴포넌트, Modal은 자식 컴포넌트가 된다.
- 자식 컴포넌트에서 부모 컴포넌트의 state를 쓸 때가 있다.
- 자식 컴포넌트는 부모 컴포넌트가 가진 state를 쓰려면 props로 전송해줘야 쓸 수 있음

## props로 자식에게 state 전해주는 법

1. ```javascript 
   <자식컴포넌트 작명={state명} />
   ```

2. 자식컴포넌트에서 props 파라미터 입력 후 사용

```javascript
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      ...
      <Modal 글제목={글제목} />
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

## 참고

1. props는 <Modal 이런거={이런거} 저런거={저런거}> 이렇게 10개 100개 1000개 무한히 전송이 가능합니다.
2. props라는 파라미터엔 전송한 모든 props 데이터가 들어가 있습니다. props.이런거 이런 식으로 원하는 것만 꺼내쓰면 됩니다.
3. props 전송할 땐 꼭 {} 중괄호로 전송해야하는건 아닙니다.
   1. <Modal 글제목={번수명}> 이렇게 변수명을 넣고 싶으면 중괄호
   2. <Modal 글제목="강남우동맛집"> 이렇게 일반 텍스트를 전송하고 싶으면 따옴표를 써도 됩니다.

## props를 이용한 상세 페이지 만들기

- 글제목을 클릭했을 때 모달창에 글제목 나오게 만들기

  1. state 새로 만들기

     - ```javascript
       let [누른제목, 누른제목변경] = useState(0);
       ```

  2. 글 제목에 onClick 설정

     - ```javascript
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
       ```

  3. Modal에 props로 누른제목 전달

     - ```javascript
       {
         modal === true
         ? <Modal 글제목={ 글제목 } 누른제목={ 누른제목 }/>
         : null
       }
       ```

  4. Modal에서 누른제목의 글제목 표시

     - ```javascript
       function Modal(props) {
         return (
           <div className="modal">
             <h2>제목 { props.글제목[props.누른제목] }</h2>
             <p>날짜</p>
             <p>상세 내용</p>
           </div>
         )
       }
       ```



### 결론

#### UI 만드는 방법은 다 똑같다.

1. state 하나 만든다.
2. state가 요런 상태면 UI를 이렇게 보여주세요~라고 코드 짜놓으면 끝.
3. 버튼 누르거나 할 땐 state를 이렇게 바꿔주세요~ 같은 것도 필요하면 추가한다.



#### "state는 UI의 현재상태를 보관하는 저장소 역할을 하는구나"를 기억하자.