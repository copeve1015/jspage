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

// 함수
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

// 조건문
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

// 반복문
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

