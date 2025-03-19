// ДЗ 17. Магазин з товарами, реалізувати з функціями

// Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах
//  (кожен товар на окремому рядку в консолі). Від користувача отримати номер товару
//  (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію),
//  вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн,
// розрахувати знижку в 20% і повідомити про це користувача.

const products = [
  { id: 1, name: "телевізор", price: 25000, quantity: 25 },
  { id: 2, name: "холодильник", price: 16000, quantity: 13 },
  { id: 3, name: "мобільний телефон", price: 24000, quantity: 22 },
  { id: 4, name: "праска", price: 5000, quantity: 46 },
  { id: 5, name: "фен", price: 3000, quantity: 18 },
];

console.log("Список товарів:");
products.map((product) =>
  console.log(
    `${product.id}. ${product.name} - ${product.price} грн, ${product.quantity} шт`
  )
);

function isValidProductById() {
  let value = Number(prompt("Введіть номер товару від 1 до 5"));

  while (isNaN(value) || !products.some((product) => product.id === value)) {
    console.log(
      "Нажаль такого товару немає в наявності. Введіть будь-ласка номер товару від 1 до 5"
    );
    alert(
      "Нажаль такого товару немає в наявності. Введіть будь-ласка номер товару від 1 до 5"
    );
    value = Number(prompt("Введіть номер товару від 1 до 5"));
  }

  return value;
}

function isValidProductByQuantity(selectedItem) {
  let value = prompt(
    `Введіть кількість товару (доступно ${selectedItem.quantity} шт.):`
  );

  while (
    isNaN(value) ||
    Number(value) <= 0 ||
    Number(value) > selectedItem.quantity
  ) {
    alert(
      `Некоректна кількість! Введіть число від 1 до ${selectedItem.quantity}.`
    );
    value = prompt(
      `Введіть кількість товару (доступно ${selectedItem.quantity} шт.):`
    );
  }

  return Number(value);
}

const productId = isValidProductById();
const selectedItem = products.find((product) => product.id === productId);
const productQuantity = isValidProductByQuantity(selectedItem);

let totalPrice = productQuantity * selectedItem.price;
let discount = 0;
let message = "";

if (totalPrice > 10000) {
  discount = totalPrice * 0.2;
  totalPrice -= discount;
  message = `Ваша покупка більше 10 000 грн, тому ваша знижка складає 20%. Сума до сплати з урахуванням знижки ${totalPrice}`;

  console.log(message);

  alert(message);
}

// * ускладнити практичне завдання запровадженням категорій товарів. Відповідно,
//  користувач може вибрати категорію товару, номер товару та кількість.
//  Потім результат його вибору з'явиться на сторінці

const electronics = {
  "Побутова техніка": [
    { id: 1, name: "холодильник", price: 16000, quantity: 13 },
    { id: 2, name: "праска", price: 5000, quantity: 46 },
    { id: 3, name: "фен", price: 3000, quantity: 18 },
    { id: 4, name: "пральна машина", price: 23000, quantity: 8 },
  ],
  Електроніка: [
    { id: 5, name: "телевізор", price: 25000, quantity: 25 },
    { id: 6, name: "мобільний телефон", price: 24000, quantity: 22 },
    { id: 7, name: "смарт-годинник", price: 13000, quantity: 38 },
    { id: 8, name: "планшет", price: 53000, quantity: 5 },
  ],
};

function getCategoryFromUser() {
  const namesOfCategories = Object.keys(electronics);
  let category = prompt(
    `Оберіть категорію. \n ${namesOfCategories.join(", ")}`
  );

  while (!category || !namesOfCategories.includes(category)) {
    alert("Некорректна категорія. Спробуйте обрати ще раз");
    category = prompt(`Оберіть категорію. \n ${namesOfCategories.join(", ")} `);
  }

  return category;
}

function getIdFromUser(category) {
  let products = electronics[category];
  console.log(products, "products");
  const productList = products
    .map((product) => `${product.id}. ${product.name};`)
    .join("\n");
  let productFromUser = Number(
    prompt(`Оберіть номер товару: \n ${productList}`)
  );

  while (
    isNaN(productFromUser) ||
    !products.some((product) => productFromUser === product.id)
  ) {
    alert(`Невірний номер товару. Оберіть один із доступних`);
    productFromUser = Number(prompt(`Оберіть номер товару: \n ${productList}`));
  }

  return productFromUser;
}

function getQuantityFromUser(selectedProduct) {
  let quantityFromUser = prompt(
    `Введіть кількість товару (доступно ${selectedProduct.quantity} шт.`
  );

  while (
    isNaN(quantityFromUser) ||
    Number(quantityFromUser) <= 0 ||
    Number(quantityFromUser) > selectedProduct.quantity
  ) {
    alert(
      `Некоректна кількість товару. Введіть від 1 до ${selectedProduct.quantity}`
    );
    quantityFromUser = prompt(
      `Введіть кількість товару (доступно ${selectedProduct.quantity} шт.)`
    );
  }

  return Number(quantityFromUser);
}

const selectedCategory = getCategoryFromUser();
const selectedId = getIdFromUser(selectedCategory);
const selectedProduct = electronics[selectedCategory].find(
  (product) => product.id === selectedId
);
const selectedQuantity = getQuantityFromUser(selectedProduct);

let totalPriceCateg = selectedQuantity * selectedProduct.price;
let discountCateg = 0;
let messageCateg = "";

if (totalPriceCateg > 10000) {
  discountCateg = totalPriceCateg * 0.2;
  totalPriceCateg -= discountCateg;
  messageCateg = `Ваша покупка більше 10 000 грн, тому ваша знижка складає 20%. Сума до сплати з урахуванням знижки ${totalPriceCateg} грн.`;

  alert(messageCateg);
}
