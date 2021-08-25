# Component

- HTML을 줄여서 쓸 수 있는 방법
- 함수를 쓰고 함수명을 태그로 쓴다.

```html
return (
	둘 중 아무거나 쓰면된다.
	<Modal></Modal>
	<Modal />
)

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}
```

- 함수의 이름은 대문자로 시작해야 한다.

- return() 괄호 안에는 하나의 HTML 태그만 들어갈 수 있다. 내용을 \<div>\</div>로 묶어 준다.

- div 태그로 묶기 싫다면 <></> 이렇게 묶어줘도 괜찮다. ( fragments 문법 )

- 컴포넌트 안에 다른 컴포넌트 삽입 가능

  - ```javascript
    function Modal(){
      return (
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
          <다른컴포넌트></다른컴포넌트>
        </div>
      )
    }
    function 다른컴포넌트(){
      return ( <div> 안녕 </div> )
    }
    
    ```

    

## 어떤거를 Component로 만들면 좋을까

- 반복 출현하는 HTML 덩어리들
- 자주 변경되는 HTML UI들
- 다른 페이지 만들 때도 컴포넌트로 만듦
- 다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 나눠서 작업을 분배



## Component 많이 만들면 단점

- state 쓸 때 복잡해짐
  - 상위 component에서 만든 state를 쓰려면 props 문법을 이용해야함