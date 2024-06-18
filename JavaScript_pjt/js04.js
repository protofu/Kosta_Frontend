// array

let arr = [1, 3, 4];

console.log(arr, typeof(arr));

let arr2 = [1, 'kimbob', 3, 4];

console.log(arr2, typeof(arr2));

// 배열 컨트롤

let arr3 = [1, 2, 3, 4, 5];

console.log(arr3[0]);
console.log(arr3[4]);
console.log(arr3[arr3.length-1]);

// 배열 요소 추가하기

let arr4 = [1, 2, 3, 4];
console.log(arr4);
arr4.push(5);
console.log(arr4);

// 배열의 특정 index에 위치한 값을 제거
// arr.splice(index, 제거하고 싶은 요소의 개수)
arr4.splice(2, 2);
console.log(arr4);

// for 반복문

for (let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}

console.log("=================================");

for(const item in arr4){
    console.log(arr4[item]);
    }
    
// while 문
console.log("=================================");

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
    }
    
    // 1부터 더가며 합이 100을 넘어갈 때 마지막 입력값
    
console.log("=================================");
let num1 = 1;

while(num1<100) {
    num1++;
    if (num1 == 100)
        console.log(num1-1);
}

console.log("=================================");
// 1~10 중 짝수만 출력
let num2 = 1;
while (num2 <11) {
    if (num2%2==0) {
        console.log(num2);
    }
    num2++;
}