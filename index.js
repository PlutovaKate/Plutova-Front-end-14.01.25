// ДЗ 15. Рекурсивне возведення в ступінь

// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

// Ступінь передається як другий аргумент у функцію

// pow(num, degree)

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }

  if (degree < 0) {
    return 1 / pow(num, -degree);
  }

  return num * pow(num, degree - 1);
}

console.log(pow(2, 0));
console.log(pow(2, -2));
console.log(pow(3, 2));
