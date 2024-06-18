// 함수 => 1급 개체, 변수에 함수를 정의
// 매개변수 = function () {}
// 함수의 매개변수로 전달되는 함수 => 콜백 함수
// 동기화 => 함수 호출 함수 모든 기능을 수행할 때 까지 대기 후 실행
// 비동기 => 웹 기반 통신 ( REST API ) => promise

function callTenTimes(callBack) {
    for (let i=0;i<10;i++) {
        callBack(i);
    }
}

callTenTimes(function(i) {
    console.log(`${i} 번째 호출중`);
});


const callBackFn = (function(val, idx, tmp){
    console.log(`${idx}번째 요소 ${val}, ${tmp}`);
});


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.forEach(callBackFn);

let arrTest = arr.map(function(val, idx, tmp){
    return val%10;
});

console.log(arrTest);

const cfn2 = function(val, idx, tmp){
    return val%2==0
}

let arr2 = arr.filter(cfn2);

console.log(arr2);