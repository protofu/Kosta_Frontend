// 객체 표현 => {} object
// 객체 : 속성, 메서드
// 변수, 메서드 구성 => 묶음

const menu1 = {
    productName: 'Americano',
    price: 3000,
    ctgy: "coffee"
};

console.log(menu1);
console.log(menu1['productName']);
console.log(menu1.price);

// 객체의 속성은 변수와 같이 모든 타입의 자료형을 가질 수 있다.

const menu2 = {
    productName: 'Americano',
    price: 3000,
    ctgy: "coffee",
    makeCoffee: function () {
        console.log(`${this.price}`);
    }
};

// 객체 메서드 호출
menu2.makeCoffee();

// 객체 속성을 동적으로 추가
const menu3 = {
    productName: 'Americano',
    price: 3000,
    ctgy: "coffee",
    makeCoffee: function () {
        console.log(`${this.price}`);
    }
};
menu3.event = false;
console.log(menu3);

// 속성 제거
delete menu3.event;
console.log(menu3);


// 객체 정의
// 1. 데이터만 가지는 객체
// 2. 데이터와 기능을 함께 가지는 객체
let cart = [];
cart.push({
    pname: 'aaa',
    price: 3000,
    point: 10
});
console.log(cart);

let menus = [
    {
        pname: 'aaa',
        price: 3000,
        point: 10
    },
    {
        pname: 'bbb',
        price: 2000,
        point: 10
    },
    {
        pname: 'ccc',
        price: 3400,
        point: 10
    },
    {
        pname: 'ddd',
        price: 2500,
        point: 10
    }
];

menus.forEach((val) => {
    console.log(val);
});