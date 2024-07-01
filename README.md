# React  
- 새프로젝트 만들기: npx create-react-app '프로젝트명'  
- 실행: npm start  
- 패키지 다운: npm init -> npm install --save react react-dom

- 초기 세팅
  - public 폴더: index.html만 남기고 모두 제거
  - src 폴더: App.css, App.js, index.js.만 남기고 제거(각 파일 내용에서 사용하지 않는 코드 제거하기)
  - index.html 파일:
<pre>
<code>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App(README.md 내용 확인 시  코드 확인 가능)</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
</code>
</pre>

- 아이콘 사용 시: npm install @mui/icons-material
