// built-in component:html의 기본요소, 소문자로 시작
// component:직접만든 요소, 대문자로 시작
// component 는 return을 가진 함수
function Mycomponent() {
  // return:화면에 출력할 코드
  return <div>hello component</div>;
}

function MyComp() {
  //JSX 코드: <div> </div>

  const myElem = <h1>hi JSX</h1>;
  return myElem;
}
function App() {
  // component 사용시 종료 태그 생략할 수 없음
  // br 같은 빈요소는 시작태그에서 꼭 종료
  return (
    <>
      <div>
        <h1>test</h1>
        <h1>Hello React</h1>
        <h2>하이 리엑트</h2>
        <h3>안녕 ㅣ액트</h3>
        <p>Lorem ipsum</p>
        <Mycomponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
