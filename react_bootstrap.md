# 리액트에서 bootstrap 사용하기

- 구글에 react bootstrap 검색

- react-bootstrap 사이트에서 bootstrap 설치

  - ```bash
    npm install react-bootstrap@next bootstrap@5.1.0
    ```

  - ```bash
    yarn add react-bootstrap@next bootstrap@5.1.0
    ```

  - 권한이 없다는 경고 메세지가 출력되면 앞에 sudo를 추가한다.

  - yarn : npm이나 npx를 대체해서 이용할 수 있도록 도와준다. npm보다 훨씬 빠른 라이브러리 설치속도와 안정성을 자랑한다.

- index.html의 헤드 태그에 cdn 코드를 복사 붙여넣기 한다.

  - ```html
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    ```

- bootstrap 사이트의 코드를 App.js의 return에 html 문으로 추가하여 테스트한다.

