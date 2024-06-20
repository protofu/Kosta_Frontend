//  타이머 함수
// serInterval(callbackFn, ms) => id 변환
// clearInterval(타이머 아이디)
// setTimeout(callbackFn, ms) => 특정 시간 후 단 한번 실행

// 1초후에 출력되는 메세지

let id1 = setTimeout(()=>{
    console.log("setTimeout")
}, 2000);

// 2초마다 반복

let count = 0;
let id2 = setInterval(()=>{
    console.log("2sec setInterval", count++);
    if (count ==3) clearInterval(id2);
}, 2000);