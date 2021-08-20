# JSX

- 태그에 class를 주고 싶으면
  - \<div className="클래스명">\<div>으로 작성

## 리액트에서 데이터 바인딩 쉽게 하는법

- ```javascript
  document.getElementById('') 이런걸 사용할 필요 없다.
  ```

- 중괄호 안에 변수를 넣으면 바인딩이 된다. (이게 될까? 라고 상상하는 모든게 가능하다)

  - {변수명 , 함수 등}

  - src, id, href  등의 속성에도 { 변수명, 함수 등 }

  - style 속성 집어 넣을 때

    - ```javascript
      style={ {color: 'blue', fontSize: '30px' } }
      ```

    - ```javascript
      let posts = { color: 'blue', fontSize: '30px' }
      <div style={ posts }>개발 Blog</div>
      ```

