// ДЗ 28. Сутності людини та автомобіля

// Створити сутність людини

// ім'я
// вік
// Метод виведення даних

const Person = function ({ name, age } = {}) {
  if (!name || typeof name !== "string") {
    alert("Incorrect name");
  }

  if (!age || typeof age !== "number" || age <= 0) {
    alert("Incorrect age");
  }

  (this.name = name), (this.age = age);
};

Person.prototype.showData = function () {
  alert(`${this.name} - ${this.age}  years old.`);
};

const user_1 = new Person({ name: "Kate", age: 30 });
console.log(user_1);
user_1.showData();

const user_2 = new Person({
  name: prompt("Enter your name"),
  age: Number(prompt("Enter your age")),
});
console.log(user_2);
user_2.showData();

// Створити сутність автомобіля:

// Характеристики автомобіля окремими властивостями

// Методи:
// Виведення на екран даних про цей автомобіль
// Присвоєння цього автомобіля власнику (записати в автомобіль об'єкт власника)
// Усі дані про людину та про автомобіль отримувати від користувача. Реалізувати необхідні перевірки
//  на коректність введення (порожні поля, вік >18 в людини і т.д. у разі потреби).
// Максимально використовувати функції

const Car = function ({ brand, model, price, owner }) {
  if (!brand || !model || typeof price <= 0 || typeof price !== "number") {
    alert("Incorrect vehicle data");
  }

  if (!owner || owner.age < 18 || !owner instanceof Person) {
    alert("The owner must be a human and over 18 years old ");
  }

  (this.brand = brand),
    (this.model = model),
    (this.price = price),
    (this.owner = owner);
};

Car.prototype.showCar = function () {
  if (this.owner.age >= 18) {
    alert(
      `Auto ${this.brand} ${this.model} cost ${this.price} $. Owner is ${this.owner.name} - ${this.owner.age} years old`
    );
  } else {
    alert(
      `Auto ${this.brand} ${this.model} cost ${this.price} $. Owner must be over 18 years old`
    );
  }
};

const audi = new Car({
  brand: "Audi",
  model: "Q5",
  price: 55000,
  owner: user_1,
});
console.log(audi);
audi.showCar();

const bmw = new Car({ brand: "BMW", model: "X6", price: 65000, owner: user_2 });
console.log(bmw);
bmw.showCar();
