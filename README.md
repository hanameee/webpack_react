<div align="center">
  <h1>webpack-react 👋</h1>
<p>CRA 없이 만들어보며 React 개발환경 이해하기</p>
  <p>
    참고 튜토리얼: 김정환 님의 <a href="https://github.com/jeonghwan-kim/lecture-frontend-dev-env/tree/1-webpack/3-plugin">프론트엔드 개발 환경의 이해</a>
  </p>
</div>



## 1. 프로젝트 초기 설정

웹팩과 리액트를 사용하기 위해 필요한 라이브러리를 설치해보자.

```shell
$ npm init -y
```

위 명령어로 개발 프로젝트를 생성할 수 있다.

패키지 이름, 버전 등 프로젝트와 관련된 정보들을 답변하거나, 빈칸으로 두어 기본값을 입력할 수 있다. 모두 기본값을 사용할 것이라면 `-y` 플래그를 붙여 질문을 스킵하고 **package.json** 파일을 생성할 수 있다.