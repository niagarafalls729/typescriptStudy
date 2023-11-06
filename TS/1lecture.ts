/* type alias  가능*/
type Animal = string | number | undefined;
// let 동물 : string | number | undefined;
let 동물 : Animal;
// ex) 대문자로 시작.UpperCamelCase 
// let 닝겐 : {name : string ,age : number } = {name:'kim',age :22}
type Human =  {name : string ,age : number }
let 닝겐 : Human = {name:'kim',age :22}
console.log("닝겐",닝겐)

/******************/
type FamliyName = {
  first: string
}
const 이름 :FamliyName = { first:'kim'}
console.log("이름.",이름.first)
이름.first = 'park'
console.log("이름.",이름.first)
/*대부분은 위와같이 const는 선언식이지만 내부의 object는 변경이 가능함*/
/*하지만 타입스크립트에서 readonly를 하면 막음*/
type GirlFriend = {
  readonly name: string
}
const 여친 :GirlFriend = { name:'수지'}
console.log("여친.",여친.name)
//읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540)
//여친.name = 'park'
console.log("여친.",여친.name)


/*타입 단순 합치기*/
type A = string;
type B = number;
type C = A | B ;
/*타입 오브젝트 합치기*/
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }
