// 매개변수로 시급과 시간을 입력받아 급여를 계산하는 함수를 만들자
// 함수이름 earnings
// 매개변수 name, wage(시급), hours
// 함수역할 이름, 시급, 시간을 출력,
// 시급과 시간을 곱한 최종 급여 출력
// 만약 wage와 hours를 입력하지 않고 실행하면 wage에 최저임금이 들어가고,
// hours에 법정 근로시간 1주일 40시간이 기본 매개변수로 입력

function earnings(name, wage, hours) {
    wage = wage || 2;
    hours = hours || 40;

    let money = wage * hours;
    console.log(name, " 님의 시급은 ", wage, "만원 이며 총 근로 시간은 ", hours, " 시간 입니다.");
    console.log("따라서, 총 급여는 ", money, "만원 입니다.");
}


let name = prompt("이름을 입력하세요");
let wage = prompt("시급(만원)을 입력하세요. 미입력시 자동 2만원으로 계산됩니다.");
let hours = prompt("시간(시간)을 입력하세요. 미입력시 자동 40시간으로 계산됩니다.");


earnings(name, wage, hours);

