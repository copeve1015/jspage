// 자바스크립트 변수, 자료형, 함수, 조건문, 반복문

// 변수
var message1 = "coffee";   // 재할당, 재선언 가능. 잘 쓰지 않는다
let message2 = "cake";     // 재할당 가능
const message3 = "bread";  // 재할당 불가

let camelCase;
let snake_case;
let PascalCase;
let $case1;
let _case2;

let bread = "빵";
let creamBread = "크림빵";
bread = creamBread;
console.log(bread);

// 자료형
/*
자료형 종류 : Number, BigInt, String, Boolean, Symbol, null, undefined
복합 타입 : Object, Function, Array
문자열(String) : 큰 따옴표, 작은 따옴표, 백틱
타입 체크(typeof) : 타입 확인, 타입 변환
객체(object) : 일반객체, 배열, 함수, 날짜, 정규표현식, 에러, 내장객체, 전역객체
객체 메서드 : Object.entries(), Object.keys(), Object.values(), Object.freeze(), Object.seal(), Object.is(), Object.assign()
배열(array)
배열 메서드 : concat(), filter(), map(), slice(), sort(), splice(), forEach(), find(), join(), includes(), reduce(), push(), pop()
배열 구조분해할당 : 요소 할당, ...rest 연산자
*/

let coffee = 100;
console.log(typeof(coffee));
coffee = "아메리카노";    
console.log(typeof(coffee));
let donut = "20";
console.log(typeof donut)
let choco = Number(donut);
console.log(typeof choco);

const person = { name: 'Alice', age: 25, isOpen: true };
person.house = '서울';
person.isOpen = false;
console.log(person);
console.log(person.name);

const breads = ["creambread", "chocobread", "saltbread"];
console.log(breads[0]);
console.log(breads);

const today = new Date();
console.log(today);
console.log(today.toString());


const bakery = {
  saltBread: "소금빵",
  chocoBread: "초코빵",
  cheeseBread: "치즈빵"
};

console.log("Object.entries() : ", Object.entries(bakery));
console.log("Object.keys() : ", Object.keys(bakery));
console.log("Object.values() : ", Object.values(bakery));

Object.freeze(bakery); // 변경이 되지 않음
Object.seal(bakery); // 변경이 가능하지만 새 속성 추가가 되지 않음

// 함수
/*
함수 종류 : 함수 선언식, 함수 표현식, 화살표 함수, 익명 함수, 즉시실행함수
지역변수, 전역변수, 메서드, 매개변수(parameter), 전달인자(argument)
생성자 함수 : new 키워드, new Function(), 메서드(call, apply, bind)
재귀 함수 : 함수가 자기 자신을 호출
Class 함수 : 생성자, 속성, 메서드, 상속, 캡슐화
클래스 선언과 표현식, Private, Protected
*/

function bread() {
  console.log("빵");
}

const saltbread = function() {
  console.log("소금빵");
};

const chocobread = () => {
  console.log("초코빵");
};

class MyClass {
  #privateField;
  _protectedField;

  constructor() {
    this.#privateField = "private";
    this._protectedField = "protected";
  }

  #privateMethod() {
    console.log('이것은 private 메서드입니다.');
  }

  _protectedMethod() {
    console.log('이것은 protected 메서드입니다.');
  }
}
const myClass = new MyClass();
console.log(myClass);

// 반복문
/*
반복문 종류 : for, for in, for of, while, do while
반복문과 같이 사용되는 키워드 : break, continue, return
*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key, object[key]);
}

const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 조건문
/*
조건문 구분 : if, else, else if, switch
 */
let num = 0;
if (num === 0) {
  console.log("이것은 0입니다.");
} else if (num === 1) {
  console.log("이것은 1입니다.");
}

num = 1;
switch (num) {
  case 1:
    console.log("이것은 1입니다.");
    break;
  case 2:
    console.log("이것은 2입니다.");
    break;
  case 3:
    console.log("이것은 3입니다.");
    break;
  case 4:
    console.log("이것은 4입니다.");
    break;
  case 5:
    console.log("이것은 5입니다.");
    break;
  default:
    console.log("이것은 default입니다.");
    break;
}

