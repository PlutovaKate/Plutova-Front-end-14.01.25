// ДЗ 8. Практика на роботу з циклами

// Вивести на сторінку в один рядок через кому числа від 10 до 20

let str = "";

for (let i = 10; i <= 20; i += 1) {
  str += i + (i < 20 ? ", " : "");
}

console.log(
  `Вивести на сторінку в один рядок через кому числа від 10 до 20: \n ${str}`
);

// Вивести квадрати чисел від 10 до 20

let pow = "";

for (let i = 10; i <= 20; i += 1) {
  pow += i ** 2 + (i < 20 ? ", " : "");
}

console.log(`Вивести квадрати чисел від 10 до 20: \n ${pow}`);

// Вивести таблицю множення на 7

let multi = "";

for (let i = 1; i <= 10; i += 1) {
  multi = i * 7;
  console.log(`7 * ${i} = ${multi}`);
}

// Знайти суму всіх цілих чисел від 1 до 15

let sum = 0;

for (let i = 1; i <= 15; i += 1) {
  sum += i;
}

console.log(`Сума всіх цілих чисел від 1 до 15 це ${sum}`);

// Знайти добуток усіх цілих чисел від 15 до 35

let multiply = BigInt(1);

for (let i = 15; i <= 35; i += 1) {
  multiply *= BigInt(i);
}

console.log(`Добуток усіх цілих чисел від 15 до 35 це ${multiply}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let middle = 0;

for (let i = 1; i <= 500; i += 1) {
  middle += i / 500;
}

console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500 це ${middle}`);

// Вивести суму лише парних чисел у діапазоні від 30 до 80

let total = 0;
for (let i = 30; i <= 80; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(`Сума лише парних чисел у діапазоні від 30 до 80 це ${total}`);

// Вивести всі числа в діапазоні від 100 до 200, які кратні 3

let numbers = "";

for (let i = 100; i <= 200; i += 1) {
  if (i % 3 === 0) {
    numbers += i + ", ";
  }
}

console.log(
  `Всі числа в діапазоні від 100 до 200, які кратні 3: \n ${numbers}`
);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let number = 80;
let divider = "";
let pairedDivider = "";
let sumDivider = 0;

for (let i = 1; i <= number; i += 1) {
  if (number % i === 0) {
    divider += i + (i < number ? ", " : "");

    if (i % 2 === 0) {
      pairedDivider += i + (i < number ? ", " : "");

      sumDivider += i;
    }
  }
}

console.log(`Дільники числа ${number}: ${divider}`);

// Визначити кількість його парних дільників

console.log(`Парні дільники числа ${number}: ${pairedDivider}`);

// Знайти суму його парних дільників

console.log(`Сума парних дільників числа ${number} дорівнює ${sumDivider}.`);

// Надрукувати повну таблицю множення від 1 до 10

console.log("Повна таблиця множення від 1 до 10:");

let table = [];

for (let i = 0; i <= 10; i += 1) {
  table.push([]);

  for (let j = 0; j <= 10; j += 1) {
    table[i].push(i * j);
  }
}

console.table(table);
