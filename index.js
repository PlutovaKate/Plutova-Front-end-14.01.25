// ДЗ 16. Кешування дзвінків

// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки.
//  Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу,
//  достатньо зберігати дані про результати виклику.

// Зберігати потрібно останні 10 дзвінків.

function saveCalls(fn) {
  const lastTenNumbers = [];

  return function (phoneNumber) {
    if (!lastTenNumbers.includes(phoneNumber)) {
      lastTenNumbers.push(phoneNumber);
    }

    if (lastTenNumbers.length > 10) {
      lastTenNumbers.shift();
    }

    console.log(`Останні 10 номерів ${lastTenNumbers}`);
    return fn(phoneNumber);
  };
}

function cacheNumbers(phoneNumber) {
  return phoneNumber;
}

const cachedNumbers = saveCalls(cacheNumbers);

console.log(cachedNumbers("099-999-99-99"));
console.log(cachedNumbers("098-888-88-88"));
console.log(cachedNumbers("097-777-77-77"));
console.log(cachedNumbers("096-666-66-66"));
console.log(cachedNumbers("098-555-55-55"));
console.log(cachedNumbers("097-444-44-44"));
console.log(cachedNumbers("096-333-33-33"));
console.log(cachedNumbers("096-222-22-22"));
console.log(cachedNumbers("098-111-11-11"));
console.log(cachedNumbers("097-777-77-77"));
console.log(cachedNumbers("096-666-66-66"));
console.log(cachedNumbers("096-000-00-00"));
