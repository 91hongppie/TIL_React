# input

## 리액트에서 input 데이터 처리하는 방법

- 빈 state를 만들어준다

  - ```javascript
    let [입력값, 입력값변경] = useState('');
    ```

- input 값 받아오기

  - ```javascript
    return (
    	<div>
      	HTML 잔뜩 있는곳...
      	<input onChange={ 입력값변경(e.target.value ) } />
    	</div>
    )
    ```

  - input 태그 내의 onChange는 input 데이터가 변경될 때마다 실행된다.

  - e.target.value는 이벤트 타겟의 값을 가져온다. (여기서는 input 데이터)

  - 입력값변경(e.target.value)를 통해 입력값을 e.target.value(input 데이터)로 바꿔준다.

### 참고

- input 태그는 원래 HTML에서 그냥 쓸 수 있지만 리액트에선 \<input /> 이렇게 쓰거나 \<input>\</input> 이렇게 써야한다. 그렇지 않으면 태그를 닫지않았다는 에러가 난다.

## 글 발행 기능 만들기

- HTML에 input, button 추가

- state를 만들어서 input에 값을 입력하면 저장

  - ```javascript
    let [입력값, 입력값변경] = useState('')
    ```

  - ```javascript
    return (
    	<div>
      	HTML 잔뜩 있는곳...
      	<div className="publish">
            <input onChange={ (e) => { 입력값변경(e.target.value)} } />
            <button onClick={ () => { 글발행하기(입력값) } }>저장</button>
    		</div>
    )
    ```

- button을 클릭하면 input 데이터를 글목록에 추가

  - ```javascript
    return (
    	<div>
      	HTML 잔뜩 있는곳...
      	<div className="publish">
            <input onChange={ (e) => { 입력값변경(e.target.value)} } />
            <button onClick={ () => { 글발행하기(입력값) } }>저장</button>
    		</div>
    )
    ```

  - ```javascript
    function 글발행하기(value) {
        let newArray = [...글제목];
      	newArray.unshift(value);
        글제목변경(newArray);
      }
    ```





## map을 쓰면 콘솔창에 에러가 출력되는 이유

- key={}라는 속성을 입력하지 않았기 때문이다.
- 리액트는 반복문을 통해 입력되는 HTML 요소에는 꼭 key={}를 입력하라고 권장한다.
- key={} 안에 반복문이 돌 때마다 1, 2, 3, 4... 이렇게 하나씩 증가하는 변수같은것을 넣어주면된다.
- 반복문의 인덱스를 넣어주면된다. 