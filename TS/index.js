let userName = 'jisu';
// userName=123;
// userName='123';
let userAge = 32;
let userNameTotal = [];
userNameTotal.push('kim');
userNameTotal.push('park');
// userNameTotal.push(123);
console.log("gg", userNameTotal);
let userInfo = [{ name: 'kim', age: 32 }];
userInfo.push({ age: 99 });
console.log(userInfo);
var whatType = 123;
//x는 받는 인자 타입    , : 뒤에는 리턴 타입    
function fnfnfn(x) {
    console.log("넣은값::", x, '결과값 x.length', x.length);
    return x.length;
}
//fnfnfn(123);
fnfnfn('안녕하세요');
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
// object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
// 근데 제목과 가수는 문자만 들어올 수 있어야합니다. 
let myFavoriteSinger = { name: 'aa', title: 'bb' };
console.log("myFavoriteSinger", myFavoriteSinger);
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
//   project 변수 우측에 적으면 됩니다. 
// member 안엔 문자로 가득한 array만 들어올 수 있고 
// days는 숫자, started는 true/false만 들어올 수 있습니다. 
