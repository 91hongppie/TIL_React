# 리액트 설치와 셋팅법

1. [NodeJs 사이트](https://nodejs.org/ko/)에서 최신버전 설치

   1. 최신버전이 아닌 버전이 이미 설치되어 있다면 삭제하고 최신버전으로 재설치
   2. [Mac에서 NodeJs 완전 삭제하는 방법](https://velog.io/@minidoo/Node-mac%EC%97%90%EC%84%9C-Node.js-%EC%99%84%EC%A0%84%ED%9E%88-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0)

2. [vscode 에디터 설치](https://code.visualstudio.com/)

3. 폴더 만들기

4. 폴더에서 vscode 열기

5. React 프로젝트 생성

   1. ```bash
      npx create-react-app blog
      ```

      - npx : 라이브러리 설치를 도와주는 명령어 ( ‘npx’는 실수가 아니며 [npm 5.2+ 버전의 패키지 실행 도구입니다](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b). )
      - create-react-app : 리액트 셋팅이 된 boilerplate를 만들기 쉽게 도와주는 라이브러리
      - blog : 프로젝트 이름

   2. success 메세지가 뜨면 설치 끝

6. 프로젝트 실행방법

   1. vscode를 프로젝트 폴더내에서 실행시킨다.

   2. 터미널에 명령어를 입력한다.

      1. ```bash
         yarn start
         ```



## NodeJs를 설치하는 이유

- create-react-app을 사용하기 위해
  - [공식문서](https://ko.reactjs.org/docs/create-a-new-react-app.html)

- NodeJs를 설치하면 npm이라는 툴이 같이 설치되어 create-react-app이라는 라이브러리를 쉽게 사용할수 있다.



## 파일 구조

- node_modules : 라이브러리를 모아놓은 폴더
- public : static 파일 보관함
  - 리액트 프로젝트를 완성한 후에 빌드,발행 등의 것들을 하면서 코드가 압축이 되는데 public 폴더에 넣으면 압축이 되지 않는다.
- src : 소스코드 보관함 ( 실제 코딩하는 폴더 )
- public/index.html : 메인 페이지 파일
- src/index.js : App.js의 내용을 index.html에 입력하는 파일
- src/App.js : 메인 페이지에 들어갈 html 내용을 작성하는 파일
- package.json : 설치한 라이브러리 명, 버전들을 모아놓는 파일
