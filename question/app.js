// Q1
let nickname = "なつき";
let age = 26;
console.log(
  "私のニックネームは" + nickname + "です。年齢は" + age + "歳です。"
);

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log(
  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
);

// Q3
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let sum = 0;
playerList.forEach((player) => {
  sum += player.age;
});
console.log(sum);
const average = sum / playerList.length;
console.log(average);

// Q6
function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function () {
  console.log("World");
};
sayWorld();

// Q7
user.birthday = "2000-09-27";
user.sayHello = function () {
  console.log("Hello!");
};
console.log(user);
console.log(user.sayHello());

// Q8
let calc = {};
calc.add = function (x, y) {
  return x + y;
};
console.log(calc.add(3, 4));

calc.subtract = function (x, y) {
  return x - y;
};
console.log(calc.subtract(20, 10));

calc.multiply = function (x, y) {
  return x * y;
};
console.log(calc.multiply(7, 7));

calc.divide = function (x, y) {
  return x / y;
};
console.log(calc.divide(10, 2));

// Q9
function remainder(x, y) {
  let remaind = x % y;
  return remaind;
}
console.log("5を3で割った余りは" + remainder(5, 3) + "です。");

// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);
// --------------------------------------------------------------
// 関数の中で定義した変数はスコープによって関数の中でしか参照できないため。
// ---------------------------------------------------------------

// 応用編-------------------------------------------------
// Q1
let random = Math.random();
randomNum = Math.floor(random * 10);
console.log(randomNum);

// Q2
function hello() {
  console.log("Hello World");
}
let time = 3000;
setTimeout(hello, time);

// Q3
let num = 0;
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

// Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, "2", 5, "8", "9", 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    console.log("not number");
  } else if (mixed[i] % 2 === 0) {
    console.log("even");
  } else if (mixed[i] % 2 === 1) {
    console.log("odd");
  }
}
