//기본
// function 내함수(x :number) :number { 
//     return x * 2 
//   } 
// 1. 함수로 들어오는 파라미터 타입지정은 파라미터 옆에 적으면 됩니다.
// 2. 함수가 실행된 후 남는 값 (return 우측에 있는 값) 타입지정하고 싶으면 함수명() 우측에 적으면 됩니다.
//void
// function 내함수(x :number) :void { 
//     return x * 2 //여기서 에러남 
//   } 
// 파라미터가 옵션인경우 !
// function 내함수(x? :number) { 
// }
// 내함수(); //가능
// 내함수(2); //가능
// function 내함수(x? :number) :number { 
//     return x * 2 
//   }  
// console.log("내함수", 내함수());
// console.log("내함수", 내함수(2));
// x라는 파라미터는 옵션이고, 옵션인 파라미터는 number | undefined 이런 식으로 타입정의가 된다고 하지 않았습니까.
// 그래서 아직 x라는 파라미터가 뭔지 확실하지 않기 때문에 에러를 내줍니다.
