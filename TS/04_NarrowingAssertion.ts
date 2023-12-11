//저번시간 함수 복습

// function a4(x : number|string) {
//     return x + 1;
// }
// a4(123);
//애매해서 에러남

//Type Narrowing 
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function a4(x : number|string) {
    if(typeof x == 'number') {
        return x + 1;
    }else{
        return x + '1';
    }
}
console.log(a4(123))
console.log(a4('123'))

//Type Assertion
function a41(x : number|string){
    let arr4 :number[] = [];
    arr4[0] = x as number;
} 
// let 이름4 : string = 'kim';
// 이름4 as number; // 에러 ( 타입변경이아님 )
console.log(a41(123))
// assertion 문법은 아래같은 에러 못잡음 
// console.log(a41('123')) 


