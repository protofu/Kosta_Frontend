
// console.log("hi");

// alert("hi");

// console.log("나는 \"안녕\"이라고 말했다");

// console.log("나는\t손흥민입니다.")

// console.log("나는\n손흥민입니다.")

// console.log("나는\\손흥민입니다.")


// 타입 확인
console.log(typeof('aas'));
console.log(typeof(23));
console.log(typeof(true));
console.log(typeof(num1));

function plus() {
    console.log("plus function");

}

console.log('plus function (=>)', typeof(plus));
console.log('{} => ', typeof({}));
console.log('[] => ', typeof([]));


// 백틱 -> `
var name = "라면";
console.log('Hi, im '+ name);
console.log(`Hi, im ${name}`);

var label = "Naver";
var href_str = "https://www.naver.com";
console.log(`<a href="${href_str}">${label}</a>`)

// test
// 변수
/*
변수 : 특정 데이터를 저장 -> 이후에 참조
변수 생성 => 메모리 공간을 생성하고 데이터와 연결

변수 생성 키워드
var : 전사, 함수 내
let : 블록 범위
const : 블록 범위, 상수 => 초기화 이후에 값 변경 불가능

*/

function fn() {
    //...
}
if (true) {
    //...
}
while (false) {
    //...
    console.log('while');
}

{
    let num = 10;
}

// console.log(num);

const pi = 3.141592;

console.log(pi);

// const 는 이후 변환 불가.
// pi = 2;

// console.log(pi);

// 호이스팅
console.log(num3);
var num3;

console.log(num5);
// console.log(num6);

var num5 = 10;
let num6 = 22;


// 대입 연산 : 변수 = 값(리터럴) 또는 변수
let num7 = num6;
// let num7 = 1000;
console.log(num7);


// 복합 대입 연산자
// += => 변수 += 10 => 변수 = 변수 + 10

// let names = prompt('이름 입력');

// console.log(names);

let year = prompt('연도');

console.log(year, typeof(year));

let num_year = Number(year);

console.log(num_year, typeof(num_year));


// 문자열 => 숫자 타입 변경
// Number(문자열)