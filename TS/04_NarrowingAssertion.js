//저번시간 함수 복습
// function a4(x : number|string) {
//     return x + 1;
// }
// a4(123);
//애매해서 에러남
//Type Narrowing 
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function a4(x) {
    if (typeof x == 'number') {
        return x + 1;
    }
    else {
        return x + '1';
    }
}
console.log(a4(123));
console.log(a4('123'));
//Type Assertion
function a41(x) {
    let arr4 = [];
    arr4[0] = x;
}
console.log(a41(123));
