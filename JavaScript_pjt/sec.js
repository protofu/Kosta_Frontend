// 문자열로 변환 : String
let num01 = 3231;

console.log(num01, typeof(num01));

// let nToStr = String(num01);
// let nToStr = num01.toString();
let nToStr = num01+'';

console.log(num01, typeof(num01));
console.log(nToStr, typeof(nToStr));

// ------------------------------------------------------------------

// bool -> String

let check = true;
console.log(check, typeof(check));

let str1 = check.toString();
console.log(str1, typeof(str1));

// ------------------------------------------------------------------

// ! 논리 부정 연산

console.log(!(-2));
console.log(!'');

// if (true) {
//     alert('if(ture)');
//     console.log('트루 실행');
// }

// if (false) {
//     alert('if(false)');
//     console.log('false 실행');
// }

// ------------------------------------------------------------------

// 현재 시각에서 오전 오후 구분 하는

const date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth()); // <- 시작값 0
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());

if (date.getHours() >= 12) {
    console.log('지금은 오후 입니다.');
} else {
    console.log('지금은 오전입니다.');
}


// ------------------------------------------------------------------

// 학점 계산

let grade;
let score = 82;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'D';
}

console.log(grade);

// ------------------------------------------------------------------

// 난수

const rand_num = Math.random();

console.log(rand_num);

const real_num = Math.floor(rand_num * 10);

console.log(real_num);

// ------------------------------------------------------------------

