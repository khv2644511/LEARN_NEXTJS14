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
