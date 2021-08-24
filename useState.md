# useState

1. 상단에 useState import

   - ```js
     import React { useState } from 'react';
     ```

2. useState('남자 코트 추천')

   1. 위 처럼 선언하면 [a, b] 가 할당된다.
   2. a 에는 state 데이터
   3. b 에는 state 데이터 변경 함수
   4. state
      1. 변수 대신 쓰는 데이터 저장공간
      2. useState()를 이용해 만들어야함
      3. 문자, 숫자, array, object 다 저장 가능

   - ES6 Distructuring

     - ```javascript
       let [a, b] = [10, 1000] 
       a === 10
       b === 1000
       ```

   5. state에 데이터 저장해놓는 이유
      1. 웹이 App처럼 동작하게 만들고 싶어서
      2. state는 변경되면 HTML이 새로고침 없이 재렌더링 된다.
      3. 그냥 변수는 데이터가 바뀌면 바로 재렌더링이 되지않고 새로고침이 되면서 재렌더링 된다.
      4. HTML이 새로고침없이 스무스하게 변경되는 사이트를 만들기를 원하면 state 쓰자.
      5. 자주 바뀌는, 중요한 데이터는 변수말고 state로 저장해서 쓰자.

3. useState 변경

   1. ```javascript
      let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '재밌는 영화 추천']);
      function 제목바꾸기() {
          let newArray = [...글제목];
          newArray[0] = '여자 코트 추천'
          글제목변경(newArray)
        }
      return (
          <div className="App">
            .
        		.
        		.	
            <button onClick={ 제목바꾸기 }>버튼</button>
            .
      			.
      			.
          </div>
        );
      ```

   2. 글제목은 데이터가 들어가고 글제목변경을 글제목을 변경하는 함수

   3. 글제목변경(글제목과 같은 데이터 형태)

   4. 글제목이 배열일 때 글제목[0] = 'ㄴㅇㄹㅁㄴ' 이런식으로 데이터 변경 불가능

   5. 글제목이 [1, 2, 3]이면 글제목변경([2, 4, 6]) 이런식으로 바뀐 데이터를 통째로 넣어야한다.

   6. 리스트에서 하나의 값만 변경하고 싶다면 다른 변수에 깊은 복사를하여 변경하고 변경함수에 넣어준다.

      1. ```javascript
         let newArray = [...글제목] -> 깊은 복사
         ```

      2. ```javascript
         newArray[0] = '여자 코트 추천' -> 0번째 인덱스의 값 변경
         ```

      3. ```javascript
         글제목변경(newArray) -> 글제목 변경을 위한 함수에 글제목과 같은 형태의 데이터 입력
         ```

   

# 추가 정보

- 터미널에 warning 뜨는게 싫다면 아래의 주석을 js 파일 최상단에 입력

  - ```javascript
    /* eslint-disable */
    ```

    