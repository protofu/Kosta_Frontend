// 화살표 함수 -> function 키워드 생략

// 일반적 함수
function func(val) {
    return val * 2 == 4;
}

// 화살표 함수
const afunc = ()=> {
    console.log("test");
}

afunc();


let numbers = [1, 2, 3, 4, 5];

// const nap = (val) => {
//     return val%2==0;
// }

let f_numbers = numbers.filter((val)=> {
    return val%2==0;
}).map((val)=>
    val+5
).forEach((val)=>{
    console.log(val);
});

// console.log(f_numbers);


// eval()

let codeRun = `
    let num11 = 1111;
    alert(num11);
`

// eval(codeRun);


