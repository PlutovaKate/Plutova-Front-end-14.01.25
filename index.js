// ДЗ 12. Функція removeElementFromArray

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

console.log("варіант 1:");

const removeElement = function (array, index) {
  for (let i = 0; i < array.length; i += 1) {
    if (i === index - 1) {
      array.splice(i, 1);
    }
  }
  return array;
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

console.log("варіант 2:");

const removeElement2 = function (array, index) {
  return array.filter((element) => element !== index);
};

const newArray = removeElement2(array, 5);
console.log(newArray);
// // Результат: [1, 2, 3, 4, 6, 7]
