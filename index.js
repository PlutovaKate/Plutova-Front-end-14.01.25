// ДЗ 10. Практика на роботу з масивами

// Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням.
// Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

// let numbers = prompt(
//   "Введи будь-які числа через кому, а я відсортую їх за зростанням"
// ).split(",");

// numbers.sort(function (a, b) {
//   return a - b;
// });

// alert(`Введені числа відсортовані за зростанням ${numbers}`);
// console.log(numbers);

// numbers.splice(1, 3);
// alert(`Я видалив елементи з масиву з 2 по 4 (включно) ${numbers}`);
// console.log(numbers);

// Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.

let array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(array);

let sumPositiveNum = 0;
let positiveNumLength = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sumPositiveNum += array[i];
    positiveNumLength += 1;
  }
}

console.log(
  `Сума позитивних елементів масива дорівнює ${sumPositiveNum}, а кількість позитивних елементів ${positiveNumLength}`
);

// Знайти мінімальний елемент масиву та його порядковий номер.

let min = Math.min.apply(null, array);
let indexOfMin = array.indexOf(min);

console.log(
  `Мінімальний елемент масиву ${min} його порядковий номер ${indexOfMin}`
);

// Знайти максимальний елемент масиву та його порядковий номер.

let max = array[0];
let indexOfMax;

for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
    indexOfMax = array.indexOf(max);
  }
}

console.log(
  `Максимальний елемент масиву ${max} його порядковий номер ${indexOfMax}`
);

// Визначити кількість негативних елементів.

let quantityOfNegative = 0;

for (i = 0; i < array.length; i += 1) {
  if (array[i] < 0) {
    quantityOfNegative += 1;
  }
}

console.log(`Кількість негативних елементів: ${quantityOfNegative}`);

// Знайти кількість непарних позитивних елементів.

let quantityOfUnpaired = 0;
let arrayUnpairedPositive = [];

for (i = 0; i < array.length; i += 1) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    arrayUnpairedPositive.push(array[i]);
    quantityOfUnpaired = arrayUnpairedPositive.length;
  }
}

console.log(`Кількість непарних позитивних елементів: ${quantityOfUnpaired}`);

// Визначити кількість парних позитивних елементів.

let arrayPairedPositiv = array.filter((item) => item > 0 && item % 2 === 0);
let quantityOfPaired = arrayPairedPositiv.length;

console.log(`Кількість парних позитивних елементів: ${quantityOfPaired}`);

// Знайти суму парних позитивних елементів.

let sumOfPairedPositiv = 0;

for (i = 0; i < arrayPairedPositiv.length; i += 1) {
  sumOfPairedPositiv += arrayPairedPositiv[i];
}
console.log(`Сума парних позитивних елементів: ${sumOfPairedPositiv}`);

// Знайти суму непарних позитивних елементів.

let sumOfUnpairedPositiv = 0;

for (i = 0; i < arrayUnpairedPositive.length; i += 1) {
  sumOfUnpairedPositiv += arrayUnpairedPositive[i];
}

console.log(`Сума непарних позитивних елементів: ${sumOfUnpairedPositiv}`);

// Знайти добуток позитивних елементів.

let multiplyPositive = 1;

array.forEach((number) => {
  if (number > 0) {
    multiplyPositive *= number;
  }
});

console.log(`Добуток позитивних елементів: ${multiplyPositive}`);

// Знайти найбільший серед елементів масиву, решту занулити.

let bigestElement = Math.max(...array);

for (let i = 0; i < array.length; i++) {
  if (array[i] !== bigestElement) {
    array.splice(i, 1, 0);
  }
}

console.log(`Найбільший серед елементів масиву: ${bigestElement}`);

console.log(array);
