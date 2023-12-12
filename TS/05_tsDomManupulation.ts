/*
let 제목 = document.querySelector('#title');
제목.innerHTML = '반갑소'
"제목이라는 변수가 null일 수 있습니다"

아까 켜놨던 strict 옵션 덕분에 이런 에러를 내주는데

이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇습니다.

(html을 못찾을 경우 null이 됩니다)


*/
/*
여러 해결책
let 제목 = document.querySelector('#title');
if (제목 != null) {
  제목.innerHTML = '반갑소'
}

let 제목 = document.querySelector('#title');
valueOF 처럼 타입검사
if (제목 instanceof HTMLElement) {
  제목.innerHTML = '반갑소'
}
let 제목 = document.querySelector('#title') as HTMLElement;
제목.innerHTML = '반갑소'

let 제목 = document.querySelector('#title');
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반갑소'
}
*/

//
/*
타입스크립트에서 쓸 수 있는 HTML 타입들은 이렇게 됩니다.

Element, HTMLElement, HTMLAnchorElement 등이 있는데 

Element에 들어있는걸 복사해서 몇개 더 추가해서 HTMLElement 타입을 만들어놨고

HTMLElement에 들어있는걸 복사해서 몇개 더 추가해서 HTMLAnchorElement 타입을 만들어놨습니다.

 

셀렉터로 대충 찾으면 Element 타입이라는게 부여가 됩니다.

아직 이 태그가 뭔지 몰라서 그냥 광범위한 타입하나를 달랑 지정해주는 겁니다.

이건 광범위한 그냥 일반 html 태그의 특징을 정리해둔 타입이기 때문에 안에 .href .src 이런거 안들어있습니다.

 

반면 HTMLAnchorElement 이건 조금 상세한 타입입니다.

이 타입은 "href, style, class, id 이런 속성을 가질 수 있다~" 라고 타입이 정의되어있습니다.

그래서 a태그에게 어울리는 타입인 HTMLAnchorElement 라는 타입을 쓸 수 있는지 instanceof 키워드로 확인해야합니다. 

확인하는 과정을 narrowing으로 인정해줌 

 
*/