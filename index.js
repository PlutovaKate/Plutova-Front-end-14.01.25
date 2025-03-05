// ДЗ 14. Практика на функції

// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його,
//  при другому — підсумовує переданий параметр з тим, що передали перший раз і тд.
//  Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sumFn(param) {
  let total = 0;
  return function sumOfNumbers(number) {
    return (total += number);
  };
}

const sum = sumFn();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// Даний масив з елементами різних типів. Створити функцію,
// яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [
  2,
  "a",
  57,
  "c",
  { a: "n", b: 5 },
  45,
  null,
  "f",
  3,
  9,
  14,
  "456",
];

function findAndSumOnlyNumbers(array) {
  let total = 0;
  let numberOfNumbers = 0;
  let arithmeticMean = 0;

  for (const element of array) {
    if (typeof element === "number") {
      total += element;
      numberOfNumbers += 1;
      arithmeticMean = (total / numberOfNumbers).toFixed(2);
    }
  }

  return arithmeticMean;
}

console.log(
  "Cереднє арифметичне лише числових елементів даного масиву:",
  findAndSumOnlyNumbers(array)
);

console.log("2-й варіант");

function averageOfNumbers(array) {
  const numbers = array.filter((item) => typeof item === "number");
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  return (sum / numbers.length).toFixed(2);
}

console.log(
  "Cереднє арифметичне лише числових елементів даного масиву:",
  averageOfNumbers(array)
);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak.
// У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії,
//  вказаної у змінній znak. Обидва числа та знак виходять від користувача.

function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return y !== 0 ? (x / y).toFixed(2) : "Division by zero is impossible";
    case "%":
      return x % y;
    case "^":
      return Math.pow(x, y);
    default:
      "Invalid operator";
  }
}

let result = doMath(
  Number(prompt("Enter X")),
  prompt("Enter Znak"),
  Number(prompt("Enter Y"))
);

alert(`Result is ${result}`);

console.log(doMath(18, "+", 5));
console.log(doMath(10, "^", 2));

// Написати функцію заповнення даними користувача двомірного масиву.
//  Довжину основного масиву та внутрішніх масивів задає користувач.
// Значення всіх елементів масивів задає користувач.

function fillArray(rows, cols) {
  let mainArray = [];

  for (let index = 0; index < rows; index++) {
    let innerArray = [];

    for (let j = 0; j < cols; j++) {
      innerArray.push(prompt(`Введіть значення всіх елементів масивів ${j}`));
    }

    mainArray.push(innerArray);
  }

  return mainArray;
}

console.log(
  fillArray(
    prompt("Введіть довжину основного масиву"),
    prompt("Введіть довжину внутрішніх масивів")
  )
);

// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом.
//  'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function deleteSymbols(string, symbol) {
  return string
    .split("")
    .filter((sym) => !symbol.includes(sym))
    .join("");
}

console.log(deleteSymbols("hello world", ["l", "d"]));
