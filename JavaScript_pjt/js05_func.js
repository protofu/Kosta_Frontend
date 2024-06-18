// 함수 : 특정 목적을 수행하기 위한 코드들의 집합
// 필요에 따라 값을 받아서 처리(매개변수 정의)
// 필요에 따라 처리된 결과를 반환(return 값)

// fn1 함수 => 안녕하세요 alert을 출력하는 함수

// function 식별자() => 선언적 함수 정의

// function fn1() {
//     alert('hi');
// }

// fn1();

// function fn2(user_name) {
//     alert('Hello ' + user_name + " player!");
// }

// fn2('제현');

// // 나이를 입력 받아서 성인 여부를 출력하는 함수

// function check_age(age) {
//     // if (age>=19) {
//     //     alert('성인입니다!')
//     // }
//     // else {
//     //     alert('미성년자 입니다.')
//     // }

//     // return age >= 19;

//     let rlt = false;
//     if (age >= 19) {
//         rlt = true;
//     }
//     return rlt;
// }

// let age = prompt('나이를 입력하세요!');

// console.log(check_age(age));


// 함수 => 1급 객체
// const fn3 = function() {
//     alert('hi');
// }

// fn3();

// 숫자 두개를 전달 받아서 사칙 연산의 결과를 출력하는 함수

function clas (num1, num2) {
    console.log("num1+num2= ", num1+num2);
    console.log("num1-num2= ", num1-num2);
    console.log("num1*num2= ", num1*num2);
    console.log("num1/num2= ", num1/num2);
}

clas(15, 13);

// 매개변수 : 함수가 호출될 떄 받는 값을 저장하는 변수
// 가변 매개변수 : 호출 할 때 매개변수의 개수가 고정이 아닌 가변일 때 사용

function test1(...items) {
    console.log(items);
}

test1(1,2,3,4,5,6,7,8,);
test1(1,2,3);
test1(1, 'sd', 12);


// 전달되는 값들 중 가장 큰 수를 반환하는 함수

function check_big(...numbers) {
    let tmp = 0;
    for (let i=0;i<numbers.length;i++) {
        if (numbers[i]>tmp) {
            tmp = numbers[i]
        }
    }
    console.log("가장 큰 수는 {",tmp,"} 입니다.");
}

check_big(14, 23, 51, 12, 32, 551, 2);

// 기본 매개변수

function test3(name, age=19, gender='M') {
    console.log(name);
    console.log(age);
    console.log(gender);
}

test3();
test3('김밥');
test3('김밥', 23, 'F');


// 매개변수로 시급과 시간을 입력받아 급여를 계산하는 함수를 만들자
// 함수이름 earnings
// 매개변수 name, wage, hours
// 함수역할 이름, 시급, 시간을 출력,
// 시급과 시간을 곱한 최종 급여 출력
// 만약 wage와 hours를 입력하지 않고 실행하면 wage에 최저임금이 들어가고,
// hours에 법정 근로시간 1주일 40시간이 기본 매개변수로 입력