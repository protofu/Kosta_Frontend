// // 게임 만들기~! 난수 게임

// // 1~100 => 임의의 숫자 정의
// // 사용자로부터 데이터 입력 받아서
// // 1: 20 => 하이
// // 2: 80 => 로우
// // 10번 기회

let num;
let check_ = false;
const goal_num = Math.floor(Math.random() * 100);

for (let i = 0; i < 10; i++) {
    num = prompt('숫자를 입력하세요.(1~100)');

    while (isNaN(num)) {
        if (isNaN(num)) {
            num = prompt('문자말고 숫자를 입력하세요.(1~100)');
        }
    }
    
    if (goal_num > num) {      // 입력한 숫자가 목표보다 작으면
        console.log('하이');
    } else if (goal_num < num) {        // 입력한 숫자가 목표보다 크면
        console.log('로우');
    } else if (goal_num == num) {
        console.log(`정답입니다. 정답은 ${goal_num} 이었습니다.`)
        check_ = true;
    }

    if (check_) {
        break;
    }
}

if (!check_) { console.log(`10번 끝! 실패! 정답은 ${goal_num} 이었습니다.`) }