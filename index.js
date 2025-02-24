// ДЗ 13. Функція generateKey

// Реалізуйте функцію generateKey(length, characters),
// що повертає рядок випадкових символів із набору characters довжиною length.

const generateKey = function (length, characters) {
  let key = "";

  for (let i = 0; i < length; i += 1) {
    randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }

  return key;
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
