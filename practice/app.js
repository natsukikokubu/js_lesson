// console.log("Hello, World!");
// console.log("1つ目の値", "2つ目の値", "3つ目の値");

// let text = "JavaScriptの練習";
// console.log(text);

// text = "JavaScriptをマスターした";
// console.log(text);

// let longText =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// console.log(longText);
// console.log(longText);
// console.log(longText);

// console.log(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );
// console.log(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );
// console.log(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );

// let age = 23;
// console.log(age);

// let testText;
// console.log(testText);

// let again = "定義しました";
// again = "再代入はできます";

// const constant = "これは定数です";
// // constant = "再代入できません。";

// let string = "JavaScriptの練習";
// console.log(string);

// console.log("elephant");
// // console.log(elephant);

// let name = "ジョニー";
// let greet = "私は" + name + "!";
// console.log(greet);

// let template = "テンプレートリテラル";
// let templateText = `これが${template}です
// ${template}は改行もできます。`;
// console.log(templateText);

// let numTen = 10;
// let strTen = "10";
// console.log(numTen, strTen);

// let num1 = 25;
// let num2 = 2;
// console.log(num1 / num2);

// let number = 5;
// number += 3;
// console.log(number);

// number -= 1;
// console.log(number);

// number *= 5;
// console.log(number);

// number /= 7;
// console.log(number);

// let increment = 0;
// console.log(increment);
// increment++;
// console.log(increment);

// let decrement = 10;
// console.log(decrement);
// decrement--;
// console.log(decrement);

// let stringNum1 = "25";
// let stringNum2 = "2";
// console.log(stringNum1 + stringNum2);

// let stringNum = "25";
// let numberNum = 2;
// console.log(stringNum + numberNum);

// let name1 = "John";
// let name2 = "Bob";
// let name3 = "Michael";
// let name4 = "Emma";

// let names5 = ["John", "Bob", "Michael", "Emma"];
// console.log(names5);

// let empties = [];

// let names = ["John", "Bob", "Michael", "Emma"];
// console.log("names[0] => ", names[0]);
// console.log("names[1] => ", names[1]);
// console.log("names[2] => ", names[2]);
// console.log("names[3] => ", names[3]);
// console.log("names.length => ", names.length);

// let emptyNames = [];
// emptyNames[0] = "John";
// emptyNames[1] = "Bob";
// emptyNames[2] = "Michael";
// emptyNames[3] = "Emma";
// console.log(emptyNames, emptyNames.length);

// let John = {
//   name: "John",
//   age: 26,
//   bloodType: "A",
//   favorite: "card",
// };
// console.log(John.bloodType);

// let Andy = {};
// Andy.name = "Andy";
// Andy.age = 24;
// Andy.bloodType = "B";
// Andy.favorite = "sweets";

// console.log(Andy);

// let fruits = ["apple", "banana", "grape", "orange", "peach"];

// let apple = {
//   color: "red",
//   shape: "round",
//   taste: "wonderful",
// };

// let vehicles = [
//   { name: "car", color: "red", speed: "normal" },
//   { name: "train", color: "green", speed: "fast" },
//   { name: "airplane", color: "grey", speed: "faster" },
// ];

// let one = "1";
// let two = 2;
// console.log("one →", typeof one, one);
// console.log("two →", typeof two, two);

// let radius = 2;
// let circle = radius * radius * 3.14;
// console.log("円の面積は" + circle + "です");

// function getArea1() {
//   let radius = 5;
//   let circle = radius * radius * 3.14;
//   console.log("円の面積は" + circle + "です");
// }
// getArea();
// getArea();
// getArea();

// function getArea2(radius) {
//   let circle = radius * radius * 3.14;
//   console.log("円の面積は" + circle + "です");
// }
// getArea2(5);
// getArea2(10);
// getArea2(15);

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   return circle;
// }
// console.log("円の面積は" + getArea(5) + "です");
// // console.log("この円の面積はなんと" + getArea(10) + "でござんす");

// function devide(x, y) {
//   if (y === 0) {
//     return;
//   }
//   return x / y;
// // }

// function define1() {
//   return "This is console in showConsole function!";
// }
// const define2 = function () {
//   return "This is console in showConsole function!";
// };

// function doFunc(callback) {
//   console.log("doFuncが呼ばれました");
//   callback();
// }

// function output() {
//   console.log("コールバック関数が呼ばれました");
// }

// doFunc(output);

let John = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
  sing: function () {
    console.log("La La La");
  },
};

John.sing();

let round = Math.round(2.86);
console.log("round => ", round);

let ceil = Math.ceil(4.05);
console.log("ceil => ", ceil);

let floor = Math.floor(4.98);
console.log("floor => ", floor);

let random = Math.random();
console.log("random => ", random);

let userAge = 0;
myFunc();

function myFunc() {
  userAge = 27;
  console.log(userAge);
}
console.log(userAge);

let value1 = true;
let value2 = false;
console.log(value1, value2);

if (true) {
  console.log("trueです");
}
console.log("処理が終わりました");

// if (false) {
// console.log('falseです');
// }
// console.log('処理が終わりました')

let tall = 185;
if (tall >= 180) {
  console.log("高身長です");
}

let val = 26;
console.log(val >= 20);
console.log(val === "26");
console.log(val == "26");
console.log("hello" === "world");

let signal = "red";
if (signal === "red") {
  console.log("赤信号です。止まりましょう。");
} else if (signal === "blue") {
  console.log("青信号です。進みましょう。");
} else if (signal === "yellow") {
  console.log("黄色信号です。空気を読みましょう。");
}

// let myAge = 60;
// if (myAge >= 35) {
//   console.log("健康診断でバリウムを飲みます");
// } else if (myAge >= 20) {
//   console.log("お酒が飲めます");
// } else if (myAge >= 18) {
//   console.log("選挙権があります");
// }

let myAge = 12;
if (myAge >= 35) {
  console.log("健康診断でバリウムを飲みます");
} else if (myAge >= 20) {
  console.log("お酒が飲めます");
} else if (myAge >= 18) {
  console.log("選挙権があります");
} else {
  console.log("子供です");
}

let loto = 8;
if (loto === 7 || loto === 8) {
  console.log("当たり");
} else {
  console.log("ハズレ");
}

let numVal = 8;
let strVal = "text";
console.log(numVal === 7 || strVal === "text");

let userA = "到着";
let userB = "不在";
if (userA === "到着" && userB === "到着") {
  console.log("全員揃ったので出発します。");
} else {
  console.log("揃ってないので、出発できません");
}

console.log(userA === "到着" && userB === "到着");

let errMsg = "";

if (errMsg === "") {
  console.log("ない！");
} else {
  console.log("ある！");
}
errMsg === "" ? console.log("ない！") : console.log("ある！");

let number = 1;
let text = number % 2 === 0 ? "偶数" : "奇数";
console.log(text);

if (1) {
  console.log("hoge");
}
if (0) {
  console.log("piyo");
}

for (let i = 0; i < 10; i++) {
  console.log(i + "回目のコンソール");
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
