// 이 변수에 들어올게 string일지 number일지 아직 애매하다면
// 방법이 몇가지 있습니다. 
// 가장 좋은 Union type 사용
// "이 변수엔 string 또는 number가 들어올 수 있습니다~" 라고 타입정의를 하고싶으면 | 연산자를 씁시다. 
// OR 연산자 같은 느낌인데 이런 타입을 전문용어로 Union type 이라고 부릅니다. 
let name2 = 'kim';
let age2 = 100;
var arr2 = [1, '2', 3];
var obj2 = { data: '123' };
// any, unknown 차이
let any2 = 10;
console.log(typeof any2); // number
console.log(any2.length); // undefined 
let unknown2 = 10;
let unknown22 = 'Test';
//console.log(unknown2.length); // 문제 발생
//console.log(unknown22.length); // 문제 발생 
let unknown222 = 10;
let unknown2222 = "unknown";
if (typeof unknown222 === "number") {
    //  console.log(unknown222.length);  // 문제 발생 
}
if (typeof unknown2222 === "string") {
    console.log(unknown2222.length);
}
// any
// 모든 타입을 허용합니다.
// TypeScript에서 타입 검사를 느슨하게 하므로 개발 당시에는 문제가 없으나 애플리케이션 또는 웹 페이지 개발 후 예기치 못한 문제가 발생할 가능성이 매우 높습니다.
//  
// unknown
// 모든 타입을 허용합니다.
// any 타입과는 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크합니다. 그러므로 문제 되는 코드를 미리 예방할 수 있습니다.
