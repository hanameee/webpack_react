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



## 2. Webpack 설정

### Webpack 이란?

웹팩은 여러개의 파일을 하나로 합쳐주는 **모듈 번들러**이다. 하나의 시작점 (entry point) 으로부터 의존적인 모듈을 전부 찾아내 하나의 결과물을 만들어낸다.

webpack 패키지와 웹팩 터미널 도구인 webpack-cli 를 설치하자.

```shell
$ npm install -D webpack webpack-cli
```

`-D`  플래그는 개발 단계에서만 사용하기에 devDependencies 에 추가함을 의미한다.

### Webpack 설정하기

Webpack에서 3가지 옵션만 사용하면 코드를 번들링 할 수 있다.

- `--mode` : 웹팩 실행 모드를 지정한다. production은 최적화되어 빌드되는 특징이, development는 빠르게 빌드되는 특징이 있다.
- `--entry` : 어플리케이션 진입점 경로를 지정한다. entry에 명시한 파일 기준으로 모든 dependency를 찾아 하나의 파일로 합치게 된다
- `--output` : 웹팩에서 빌드를 완료하면 output에 있는 정보를 통해 빌드 파일을 생성한다

개발할 때마다 터미널에 `--mode`, `--entry`, `--output` 옵션을 사용해 번들링 할 수도 있지만, 웹팩 설정파일인 **webpack.config.json** 에 옵션을 작성하는 것이 좋다.

> webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    // [name] 에는 entry에 추가한 main이 문자열로 들어간다
    filename: '[name].js',
    //절대 경로를 사용하므로 노드 코어 모듈인 path의 resolve() 함수를 사용해 계산한다
    path: path.resolve('./dist'),
  },
}
```



웹팩 실행을 위한 npm 커스텀 명령어를 추가해보자.

> package.json
```json
{
  "scripts": {
    "build": "webpack"
  }
}
```
모든 옵션을 웹팩 설정파일로 옮겼으므로, 이제 `npm run build` 명령어를 통해 간단히 웹팩 작업을 지시할 수 있다.



---

### References

[Webpack과 Babel을 이용한 React 개발 환경 구성하기](https://medium.com/wasd/웹팩-webpack-과-바벨-babel-을-이용한-react-개발-환경-구성하기-fb87d0027766)

[React 개발 환경을 구축하면서 배우는 웹팩(Webpack) 기초]([https://velog.io/@jeff0720/React-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-Webpack-%EA%B8%B0%EC%B4%88](https://velog.io/@jeff0720/React-개발-환경을-구축하면서-배우는-Webpack-기초))

[프론트엔드 개발환경의 이해](http://jeonghwan-kim.github.io/series/2020/01/02/frontend-dev-env-webpack-intermediate.html)



