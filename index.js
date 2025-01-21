///////////////////////////////////////////////////////////////////////////

// Задача 1.
// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач

console.log("Задача 1");

let name = prompt("Як тебе звати?");
let message = `Hello, ${name} ! How are you?`;
console.log(message);
alert(message);

///////////////////////////////////////////////////////////////////////////

// Задача 2.
// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів

// Рішення 1:

console.log("Задача 2. Рішення 1:");

let x = 3;
let y = 5;

let Addition = x + y;
let Subtraction = x - y;
let multiplication = x * y;
let Division = x / y;

console.log(`Сума чисел ${x} та ${y} дорівнює ${Addition}`);
console.log(`Різниця чисел ${x} та ${y} дорівнює ${Subtraction}`);
console.log(`Добуток чисел ${x} та ${y} дорівнює ${multiplication}`);
console.log(`Частка чисел ${x} та ${y} дорівнює ${Division}`);

// Рішення2:

console.log("Задача 2. Рішення 2:");

let z = Number(prompt("Введи перше число для математичних розрахунків"));
let q = Number(prompt("Введи друге число для математичних розрахунків"));

let AdditionClient = z + q;
let SubtractionClient = z - q;
let multiplicationClient = z * q;
let DivisionClient = z / q;

let messageCalculate = `${z} + ${q} = ${AdditionClient};
${z} - ${q} = ${SubtractionClient};
${z} * ${q} = ${multiplicationClient};
${z} / ${q} = ${DivisionClient}.`;
console.log(messageCalculate);
alert(messageCalculate);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Задача 3.
//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні

console.log("Задача 3");

let a = prompt("Введіть перше число для порівняння");
let b = prompt("Введіть друге число для порівняння");
const compare = a === b;
if (compare) {
  console.log(compare, "ці числа рівні");
  alert("Ці числа рівні");
} else {
  console.log(compare, "ці числа не рівні");
  alert("Ці числа не рівні");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Задача 4.
// Визначити середнє арифметичне трьох чисел

// Рішення 1:

console.log("Задача 4. Рішення 1:");

const num_1 = 6;
const num_2 = 6;
const num_3 = 8;

const mean = ((num_1 + num_2 + num_3) / 3).toFixed(2);
console.log(
  `Середнє арифметичне чисел ${num_1}, ${num_2} та ${num_3} дорівнює`,
  mean
);

// Рішення 2:

console.log("Задача 4. Рішення 2:");

let numClient_1 = Number(
  prompt("Введіть перше число, щоб визначити середнє арифметичне")
);
let numClient_2 = Number(
  prompt("Введіть друге число, щоб визначити середнє арифметичне")
);
let numClient_3 = Number(
  prompt("Введіть третє число, щоб визначити середнє арифметичне")
);

const meanClient = ((numClient_1 + numClient_2 + numClient_3) / 3).toFixed(2);

console.log(
  `Середнє арифметичне чисел ${numClient_1}, ${numClient_2} та ${numClient_3} дорівнює`,
  meanClient
);

alert(
  `Середнє арифметичне чисел ${numClient_1}, ${numClient_2} та ${numClient_3} дорівнює ${meanClient}`
);

/////////////////////////////////////////////////////////////////////////////////////////////////

//Задача 5.

// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

// Рішення 1

console.log("Задача 5. Рішення 1:");

let number = "12345";
let result = "";

for (let i = 0; i < number.length; i += 1) {
  result += number[i];

  if ((i + 1) % 1 === 0) {
    result += " ";
  }
}
console.log(result);

// Рішення 2 (без %):

console.log("Задача 5. Рішення 2 (без %):");

let anyNumber = 12345;
if (anyNumber >= 10000 && anyNumber <= 99999) {
  anyNumber = anyNumber.toString().split("").join(" ");
  console.log(anyNumber);
} else {
  console.log("Введіть п'ятизначне число.");
}

// Рішення 3 (без %):

console.log("Задача 5. Рішення 3 (без %):");

let someNumber = 12345;
someNumber = someNumber.toString();
someNumber =
  someNumber[0] +
  " " +
  someNumber[1] +
  " " +
  someNumber[2] +
  " " +
  someNumber[3] +
  " " +
  someNumber[4];

console.log(someNumber);
