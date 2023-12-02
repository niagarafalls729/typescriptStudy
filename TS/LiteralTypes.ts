let name3 : 123;
name3 = 345; 

console.log(name3)

let name4 : '대머리' | '솔로';

name4 = '대머리'
console.log(name4)

function fun( a: string , b : 'hello') : 1 | 0{
    console.log(a,b)
    return(1)
}
const a = fun('asdf','hello')
console.log("a",a)

function game( a :  '가위'|'바위'|'보'): ('가위'|'바위'|'보')[] {
    return ['바위']
}
//=========================================== const 변수의 한계

//1 LiteralTypes은 2개 이상 저장이 가능하지만 const는 1개만되니 있다 생각

//LiteralTypes 의 문제점

var 자료 = {
    name : 'kim'
}
console.log("자료.name",자료.name)
function myFn( a: 'kim'){

}

//myFn(자료.name)
// var 자료.name 은 말 그대로 String 이고 myFn 는 kim이라는 타입이라서 못들어감

// 자료2 as Const 를쓰면 object Value의 값을 그대로 타입으로 지정함 
// 대신 readonly로 지정되면서 값도 변경못함 
var 자료2  = {
    name : 'kim'
} as const

myFn(자료2.name)

 