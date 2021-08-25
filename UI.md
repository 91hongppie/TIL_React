# 클릭하면 등장하는 UI

- 리액트 JSX에서는 if 문을 사용할수 없기 때문에 삼항 연산자를 쓴다.

  - ```javascript
    let [modal, modal변경] = useState(false);
    {
            modal === true
            ? <Modal />
            : null
          }
    ```

  - modal이 true일 때는 \<Modal /> 이 나타나고 false일 때는 아무것도 나타나지 않는다.

- 버튼을 클릭함으로써 Modal이 나타났다가 없어지게 하기

  - 내 방법

    - ```javascript
      <button onClick={ () => { modal변경(modal ? false : true) } }>버튼</button>
      ```

  - 강의에서의 방법

    - ```javascript
      <button onClick={ modal변경(!modal) }>버튼</button>
      ```

  