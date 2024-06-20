// 기본 자료형 객체 선언 (생성)
// 숫자, 문자열, bool 타입

// Number(), String(), Boolean()

// new String('문자열')
let obj_str = new String('   Hello world!!!   ');
console.log(obj_str, obj_str.length);
console.log(obj_str.trim(), obj_str.trim().length);

let obj_pnum = new String('010-1234-5819');
console.log(obj_pnum.split("-"));
console.log(obj_pnum.replaceAll('-', '//'));

// --------------------------------------------------
const obj_num = new Number(100.1423);
console.log(obj_num, obj_num.toString());

let priNum = 1000;
console.log(priNum.toString());

console.log(obj_num.toFixed(2));