# 예전 리액트 문법

```javascript
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim' }
  }
  
  render() {
    return(
    	<div>프로필입니다.</div>
    )
  }
}
```

- class : 변수/함수 보관하는 덩어리

- extends : 오른쪽에 있는 것의 성질을 물려받는다.(여기서는 React.Component)

- React.Conponent : 컴포넌트 성질을 갖고있는 덩어리

- state는 constructor 안에 작성

- super() : extends 했던 React.Component 라는 덩어리에 있던 변수들을 그대로 물려받아 쓰겠다는 뜻, 꼭 먼저 써야 밑에 state를 만들 수 있다.

- constructor : class의 변수/초기값 저장할 때 쓴다.

- constructor 안의 state를 꺼내쓰려면

  - ```javascript
    class Profile extends React.Component {
      constructor() {
        super();
        this.state = { name: 'Kim' }
      }
      
      render() {
        return(
        	<div>
          <h3>프로필입니다.</h3>
          <p>저는 {this.state.name} 입니다.</p>
          </div>
          
        )
      }
    }
    ```

- 버튼을 누르면 state를 변경

  - ```javascript
    class Profile extends React.Component {
      constructor() {
        super();
        this.state = { name: 'Kim' }
      }
      
      render() {
        return(
        	<div>
          <h3>프로필입니다.</h3>
          <p>저는 {this.state.name} 입니다.</p>
    			<button onClick={ ()=>{ this.setState( {name: 'Park'} ) } }>버튼</button>
          </div>
          
        )
      }
    }
    ```

  - 리액트에서 제공하는 함수인 setState를 통해 state를 변경한다.

  - 이전에 썼던 state 변경 함수랑은 좀 다르다

    - state 변경 함수는 state를 통째로 바꿔준다.
    - setState는 변경할 state만 입력하여 변경한다. state 변경 함수와는 다르게 일부만 변경 가능

- class 내에 함수 만들기

  - ```javascript
    class Profile extends React.Component {
      constructor() {
        super();
        this.state = { name: 'Kim' }
      }
      
      changeName() {
        this.setState( {name: 'Park'} )
      }
      
      render() {
        return(
        	<div>
          <h3>프로필입니다.</h3>
          <p>저는 {this.state.name} 입니다.</p>
    			<button onClick={ { this.changeName.bind(this) } }>버튼</button>
          </div>
          
        )
      }
    }
    ```

  - 함수의 자리는 constructor과 render 사이에 만들어준다.

  - this를 잘 연결해줘야한다.

  - 자바스크립트에선 function을 쓰면 안에 있는 this 값는 항상 새롭게 재정의된다.

  - changeName 안의 this도 재정의가 된다.

  - this가 재정의 되지않게 .bind(this)를 쓰거나 함수를 화살표 함수로 바꾼다.

    - ```javascript
      this.changeName.bind(this)
      ```

    - ```javascript
      changeName = () => {
        this.setState( { name: 'Park' })
      }
      ```



## class로 작성하기 불편하다 function 쓰자!

