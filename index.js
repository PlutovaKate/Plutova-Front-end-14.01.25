// Задача 1.
//  Дано два різні числа. Визначити, яке з них більше, а яке менше.

console.log("Задача 1.");

const a = prompt("Введіть перше число, щоб перевірити нерівність");
const b = prompt("Введіть друге число, щоб перевірити нерівність");
if (a > b) {
  console.log(`Число ${a} більше, ніж число ${b}`);
} else if (a === b) {
  console.log(`Число ${a} дорівнює числу ${b}`);
} else {
  console.log(`Число ${a} менше, ніж число ${b}`);
}

// Задача 2.
//  Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

console.log("Задача 2. Рішення 1:");

const distance_1 = "100.05km";
const distance_2 = "100.05ft";

const normalizedDistance_1 = (Number.parseFloat(distance_1) * 1000).toFixed(2);
const normalizedDistance_2 = (Number.parseFloat(distance_2) * 0.305).toFixed(2);
console.log(`Відстань ${distance_1} дорівнює ${normalizedDistance_1} метрів`);
console.log(`Відстань ${distance_2} дорівнює ${normalizedDistance_2} метрів`);

if (normalizedDistance_1 > normalizedDistance_2) {
  console.log("Відстань у кілометрах більша, ніж у футах");
} else console.log("Відстань у футах більша, ніж у кілометрах");

console.log("Задача 2. Рішення 2:");

const distance1 = prompt("Введіть довжину відстані у кілометрах");
const distance2 = prompt("Введіть довжину відстані у футах");

const normalizedDistance1 = (Number.parseFloat(distance1) * 1000).toFixed(2);
const normalizedDistance2 = (Number.parseFloat(distance2) * 0.305).toFixed(2);
console.log(`Відстань ${distance1} км дорівнює ${normalizedDistance1} метрів`);
console.log(
  `Відстань ${distance2} футів дорівнює ${normalizedDistance2} метрів`
);

const compare =
  normalizedDistance1 > normalizedDistance2
    ? `Відстань ${distance1} км більша, ніж ${distance2} футів`
    : `Відстань ${distance1} км менша, ніж ${distance2} футів`;

console.log(compare);
alert(compare);

// Задача 3.
//  Визначити, чи є число s дільником числа d? І навпаки. (Дати дві відповіді)

console.log("Задача 3.");
d = prompt("Введіть число d");
s = prompt(`Введіть число, а я перевірю чи є воно дільником числа ${d}`);

if (d % s === 0) {
  console.log(`Число ${s} є дільником числа ${d}`);
  alert(`Число ${s} є дільником числа ${d}`);
} else {
  console.log(`Число ${s} НЕ є дільником числа ${d}`);
  alert(`Число ${s} НЕ є дільником числа ${d}`);
}

// Задача 4.
//  Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

console.log("Задача 4. Рішення 1:");
const f = 57607;

if (f % 2 === 0) {
  console.log(`Число ${f} закінчується парною цифрою`);
} else {
  console.log(`Число ${f} закінчується не парною цифрою`);
}

const lastNumber = f % 10;
console.log(`Остання цифта ${lastNumber}`);

console.log("Задача 4. Рішення 2:");
const g = prompt("Введіть число, а я перевірю чи є воно парним");
const lastDigit = g % 10;

const result =
  g % 2 === 0
    ? `Число ${g} закінчується парною цифрою ${lastDigit}`
    : `Число ${g} закінчується не парною цифрою ${lastDigit}`;

console.log(result);
alert(result);

// Задача 5.
//  Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

console.log("Задача 5.");
const numeral = prompt("Введіть двузначне число");

if (99 >= numeral && numeral > 10) {
  const firstNumeral = Math.floor(numeral / 10);
  const secondNumeral = numeral % 10;

  if (firstNumeral > secondNumeral) {
    console.log(
      `У числі ${numeral} перша цифра ${firstNumeral} більша, ніж друга ${secondNumeral}`
    );
    alert(
      `У числі ${numeral} перша цифра ${firstNumeral} більша, ніж друга ${secondNumeral}`
    );
  } else if (firstNumeral === secondNumeral) {
    console.log(
      `У числі ${numeral} перша цифра ${firstNumeral} дорівнює другій ${secondNumeral}`
    );
    alert(
      `У числі ${numeral} перша цифра ${firstNumeral} дорівнює другій ${secondNumeral}`
    );
  } else {
    console.log(
      `У числі ${numeral} перша цифра ${firstNumeral} менша, ніж друга ${secondNumeral}`
    );
    alert(
      `У числі ${numeral} перша цифра ${firstNumeral} менша, ніж друга ${secondNumeral}`
    );
  }
} else {
  console.log(`Число ${numeral} не є двозначним`);
  alert(`Число ${numeral} не є двозначним`);
}

// Задача 6.
//  Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

console.log("Задача 6.");

const threeDigitNumber = prompt("Введіть тризначне число");

if (threeDigitNumber >= 100 && threeDigitNumber <= 999) {
  const firstDigit = Math.floor(threeDigitNumber / 100);
  const secondDigit = Math.floor((threeDigitNumber / 10) % 10);
  const thirdDigit = threeDigitNumber % 10;

  const sumDigit = firstDigit + secondDigit + thirdDigit;
  const productDigit = firstDigit * secondDigit * thirdDigit;

  if (sumDigit % 2 === 0) {
    console.log(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є парною`
    );
    alert(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є парною`
    );
  } else {
    console.log(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є НЕ парною`
    );
    alert(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є НЕ парною`
    );
  }

  if (sumDigit % 5 === 0) {
    console.log(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є кратною 5`
    );
    alert(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і є кратною 5`
    );
  } else {
    console.log(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і НЕ є кратною 5`
    );
    alert(
      `У числі ${threeDigitNumber} сума його цифр дорівнює ${sumDigit} і НЕ є кратною 5`
    );
  }

  if (productDigit > 100) {
    console.log(
      `У числі ${threeDigitNumber} добуток його цифр дорівнює ${productDigit} і є більше 100`
    );
    alert(
      `У числі ${threeDigitNumber} добуток його цифр дорівнює ${productDigit} і є більше 100`
    );
  } else {
    console.log(
      `У числі ${threeDigitNumber} добуток його цифр дорівнює ${productDigit} і є менше 100`
    );
    alert(
      `У числі ${threeDigitNumber} добуток його цифр дорівнює ${productDigit} і є менше 100`
    );
  }
} else {
  console.log("Ви ввели не тризначне число");
  alert("Ви ввели не тризначне число");
}

// Задача 7. Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

console.log("Задача 7.");
const threeDigitNum = prompt(
  "Введіть тризначне число, а я перевірю чи всі цифри в ньому однакові"
);

const firstDigitNum = Math.floor(threeDigitNum / 100);
const secondDigitNum = Math.floor((threeDigitNum / 10) % 10);
const thirdDigitNum = threeDigitNum % 10;

if (
  firstDigitNum === secondDigitNum &&
  firstDigitNum === thirdDigitNum &&
  secondDigitNum === thirdDigitNum
) {
  console.log(`У числі ${threeDigitNum} всі цифри однакові`);
  alert(`У числі ${threeDigitNum} всі цифри однакові`);
} else if (
  firstDigitNum === secondDigitNum ||
  firstDigitNum === thirdDigitNum ||
  secondDigitNum === thirdDigitNum
) {
  console.log(`У числі ${threeDigitNum} є однакові цифри`);
  alert(`У числі ${threeDigitNum} є однакові цифри`);

  if (firstDigitNum === secondDigitNum) {
    console.log("однаковими є перше та друге число");
    alert("однаковими є перше та друге число");
  } else if (firstDigitNum === thirdDigitNum) {
    console.log("однаковими є перше та третє число");
    alert("однаковими є перше та третє число");
  } else {
    console.log("однаковими є друге та третє число");
    alert("однаковими є друге та третє число");
  }
} else {
  console.log(`У числі ${threeDigitNum} всі цифри різні`);
  alert(`У числі ${threeDigitNum} всі цифри різні`);
}

// Задача 8.
// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

console.log("Задача 8.");

const numberMirror = 123321;

if (numberMirror >= 100000 && numberMirror <= 999999) {
  const numberString = numberMirror.toString();
  console.log(numberString);

  if (
    numberString[0] === numberString[5] &&
    numberString[1] === numberString[4] &&
    numberString[2] === numberString[3]
  ) {
    console.log(`Число ${numberMirror} є дзеркальним`);
  } else {
    console.log(`Число ${numberMirror} НЕ є дзеркальним`);
  }
} else {
  console.log(`Число ${numberMirror} не є шестизначним`);
}
