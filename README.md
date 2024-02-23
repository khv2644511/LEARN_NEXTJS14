# LEARN_NEXTJS14
next.js14 공부하기

## Defining Rout
Next.js는 폴더를 사용해 경로를 정의하는 파일 시스템 기반 라우터를 사용한다.
각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타낸다.
중첩된 경로를 만들려면 폴더를 서로 중첩하면 된다.
ex. app/dashboard/setting/page.tsx

page.tsx가 없는 폴더는 렌더링되지 않는다.
app 폴더 내에 폴더, 파일을 만들어도 된다? -> O, page라는 파일을 만들지 않는 이상 실제 경로에 포함되지도 렌더링 되지도 않음