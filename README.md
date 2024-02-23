# LEARN_NEXTJS14
next.js14 공부하기

## Day1 - Defining Rout
Next.js는 폴더를 사용해 경로를 정의하는 파일 시스템 기반 라우터를 사용한다.
각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타낸다.
중첩된 경로를 만들려면 폴더를 서로 중첩하면 된다.
ex. app/dashboard/setting/page.tsx

page.tsx가 없는 폴더는 렌더링되지 않는다.
app 폴더 내에 폴더, 파일을 만들어도 된다? -> O, page라는 파일을 만들지 않는 이상 실제 경로에 포함되지도 렌더링 되지도 않음

## Day2 - Not Found Routes
찾을 수 없는 파일은 경로 내 세그먼트 내에서 notFound 함수가 실행될 때 UI를 렌더링하는데 사용됨.
사용자 정의 UI 제공과 함께 Next.js는 스트리밍된 응답의 경우 200 HTTP 상태 코드를 반환하고 스트리밍되지 않은 응답의 경우 404를 반환.

`usePathname`
usePathname은 현재 URL의 pathname을 읽을 수 있게 해주는 클라이언트 컴포넌트 훅.
클라이언트 컴포넌트 훅을 사용할 땐 `'use client'`를 코드 최상단에 작성해줘야 됨.


## Day3 - SSR vs CSR
rendering 이란? 
next.js가 우리의 react component를 가져와서 브라우저가 이해할 수 있는 html로 변환하는 작업이다.

### CSR(Client Side Rendering)
react의 렌더링 방식이며, 브라우저가 rendering 작업을 한다.
즉, CSR은 브라우저의 JavaScript 엔진에 의해 rendering이 수행된다.
사용자 브라우저인 client 단에서 모든 rendering 작업을 수행해야 한다.(client가 사용자 브라우저에 UI를 구축해야한다는 의미)
client는 JavaScript를 로드하고, 그 후에 JavaScript가 UI를 빌드한다.

CSR(Client Side Rendering)의 단점
    1. 초기 로딩 속도가 느리다.(사용자는 자바스크립트 파일을 다운로드하고, 동적으로 DOM을 생성하는 시간을 기다려야 하기 때문)

    예를 들어, React-application에서 페이지의 소스코드를 보면 페이지의 실제 소스코드는 비어있다.
    `<div id="root"></div>` 여기에는 UI가 없다.
    페이지 검사를 눌러서 보이는 태그들은 Javascript에 의해 페이지에 추가된 것이다.
    브라우저가 JavaScript 파일을 다운로드하고 실행한 후에 보여진다.

    CSR의 경우 새로고침하면 페이지에 아무것도 없는 순간을 볼 수 있는데,
    이 순간은 React를 실행시키고 UI를 화면에 올리기 위해 `브라우저가 모든 JavaScript 파일을 다운로드하고 실행시키는데에 걸리는 시간이다.`
    만약 사용자가 데이터 연결 상태가 안좋은 환경에서 웹사이트에 접속한다고 가정해보자. 사용자는 모든 JavaScript 파일을 다운받아야 하고, 모든 파일이 다운로드 완료될 때까지 기다려야 한다. 따라서 빈 화면(페이지에 아무것도 없는 순간)을 훨씬 오래봐야하는 상황이 발생할 수 있다.

    2. SEO 검색 엔진 최적화

    `Google은 페이지의 HTML을 본다.` 따라서 만약 직접 만든 웹사이트가 Google에 노출되길 바란다면, 빈 페이지를 보여주지 않는 것이 좋다.
    가끔 Google이 페이지의 JavaScript를 실행시키기도 하지만, 위험을 감수하는 것 보다는 HTML에 웹사이트의 유용한 실제 데이터가 들어있는 편이 나을 것이다. 그리고 다른 검색 엔진들은 페이지에서 JavaScript를 실행하지 않을 수도 있다.
    CSR을 사용하면 검색 엔진은 비어있는 웹사이트를 보는것이다. 따라서 SEO의 문제를 겪는 것이다.


### SSR(Server Side Rendering)
우리가 next.js로 웹사이트를 빌드할 때는 자동적으로 Server Side Rendering이 된다.
페이지의 소스코드를 보면 페이지 내용들이 모두 브라우저 코드에 있는 걸 확인할 수 있다. 이미 화면에 표시할 HTML을 갖고 있기 때문이다.
이는 브라우저가 JavaScript가 로드될 때까지 기다릴 필요가 없다는 것을 뜻한다.

next.js application은 page 안의 모든것, component 안의 모든것들을 nextJs가 우선적으로 Server에서 render한다.
next.js는 모든 컴포넌트를 서버에서 render 해서 그 html을 가지고 있고, 이 html을 브라우저 request에 대한 response로 준다.
최초 application의 UI 빌드에서는 JavaScript에 의존하지 않는다. UI는 이미 빌드되어 있고, HTML도 이미 존재하고 있다.
(사용자가 처음 페이지에 도착했을 때, UI를 빌드하는데에 JavaScript는 필요하지 않다.)


`❗️NextJs에서는 "use client"가 사용여부와 관계없이, 모든 컴포넌트와 페이지들은 먼저 backend(서버)에서 render 된다. 이것들은 HTML로 변환된다. 그리고 변환된 HTML은 브라우저로 넘어간다.❗️`