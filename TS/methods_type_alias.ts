//기본
function getName(name : string){

}

//기본 리턴값
function getNameAge(name : string) : number{
    return 0;
}

type fntype = (a : string)  =>  number   
//두 개의 값을 반환하는 함수의 경우:
type fntype2 = (a: string) => { prop1: string, prop2: number };


//tyle alias 함수 type 저장해서 쓰는법
// const getNameType : fntype = (a) => {
//     return 9
// }
const getNameType : fntype = function(a) {
    return 9
}


type PlusOneType = (x: number) => number;
const 회원정보 = {
    name : 'kim'   ,
    getName(){
        console.log(회원정보.name)
    },
    getNamePlusGender(a : string) :string {
        return 회원정보.name+a
    },
    plusOne: ((x: number): number => {
        return x + 1;
    }) as PlusOneType, // PlusOneType 타입을 적용
    plusOne2: (x: number): number => {
        return x + 1;
    } // PlusOneType 타입을 적용
}
회원정보.getName();
console.log(회원정보.getNamePlusGender('남'))
회원정보.plusOne(2)

