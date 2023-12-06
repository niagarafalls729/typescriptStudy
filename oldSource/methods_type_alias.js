//기본
function getName(name) {
}
//기본 리턴값
function getNameAge(name) {
    return 0;
}
//tyle alias 함수 type 저장해서 쓰는법
// const getNameType : fntype = (a) => {
//     return 9
// }
const getNameType = function (a) {
    return 9;
};
const 회원정보 = {
    name: 'kim',
    getName() {
        console.log(회원정보.name);
    },
    getNamePlusGender(a) {
        return 회원정보.name + a;
    },
    plusOne: ((x) => {
        return x + 1;
    }),
    plusOne2: (x) => {
        return x + 1;
    } // PlusOneType 타입을 적용
};
회원정보.getName();
console.log(회원정보.getNamePlusGender('남'));
회원정보.plusOne(2);
