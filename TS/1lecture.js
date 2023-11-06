// let 동물 : string | number | undefined;
let 동물;
let 닝겐 = { name: 'kim', age: 22 };
console.log("닝겐", 닝겐);
const 이름 = { first: 'kim' };
console.log("이름.", 이름.first);
이름.first = 'park';
console.log("이름.", 이름.first);
const 여친 = { name: '수지' };
console.log("여친.", 여친.name);
//읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540)
//여친.name = 'park'
console.log("여친.", 여친.name);
