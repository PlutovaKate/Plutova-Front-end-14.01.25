// ДЗ 31. Гамбургер

// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій)
// великий (100 тугриків, 40 калорій)
// Гамбургер може бути з одним із кількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій)
// салатом (+ 20 тугриків, + 5 калорій)
// картоплею (+ 15 тугриків, + 10 калорій)
// Можна додати добавки:

// посипати приправою (+ 15 тугриків, 0 калорій)
// полити майонезом (+ 20 тугриків, + 5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера.
//  Використовуй ОВП підхід (підказка: необхідний клас Гамбургер, константи, способи вибору опцій і
// розрахунку необхідних величин).

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SAUCE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => (totalPrice += topping.price));
    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => (totalCalories += topping.calories));
    return totalCalories;
  }
}

// Приклад роботи коду:
// маленький гамбургер із начинкою із сиру
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
console.log(hamburger);
// Добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// Запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());
// скільки коштує
console.log("Price: " + hamburger.calculatePrice());
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
