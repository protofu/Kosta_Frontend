// JSON : JSON 타입의 형식 변환
// object => JSON, JSON => object

let menu = {
    "productName": "Americano",
    "price": 3000,
    "ctgy": "Coffee",
    "event": true,
    "option": ["shot", "2shot"]
}

let json_string = JSON.stringify(menu);
console.log(json_string);
console.log(typeof (json_string));

let obj_json = JSON.parse(json_string);
console.log(obj_json);
console.log(typeof(obj_json));


