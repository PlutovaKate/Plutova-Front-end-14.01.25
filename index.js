// ДЗ 30. Сутності багатоквартирного будинка

// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир із певною кількістю мешканців
// Кількість квартир у будинку та мешканців у кожній квартирі задає користувач на етапі заповнення форми
// Реалізувати валідацію лише на порожні поля
// Реалізувати функцію виведення даних по дому після створення
// Візуально:
// Форма для додавання будинку
// Після її заповнення: запитуємо у користувача за допомогою форми дані про квартири в цьому будинку
// Аналогічно для мешканців
// Після заповнення – доступна кнопка Виводу даних про будинок

const inputQuantityOfFlats = document.querySelector("#quantityOfFlats");
const houseButton = document.querySelector("#houseButton");
const inputQuantityOfResidents = document.querySelector("#numberOfResidents");
const flatButton = document.querySelector("#flatButton");
const inputNameOfResident = document.querySelector("#nameOfResident");
const residentButton = document.querySelector("#residentButton");
const showInfoButton = document.querySelector("#showInfo");
const infoContainer = document.querySelector("#infoContainer");

class Resident {
  constructor(name) {
    this.name = name;
  }
}

class Flat {
  constructor(residenceQuantity) {
    this.residenceQuantity = residenceQuantity;
    this.residents = [];
  }

  addResidents(resident) {
    this.residents.push(resident);
  }
}

class House {
  constructor(flatsQuantity) {
    this.flatsQuantity = flatsQuantity;
    this.flats = [];
  }

  addFlats(flat) {
    this.flats.push(flat);
  }
}

/////////////////////////////////////////////////////////

houseButton.addEventListener("click", getQuantityOfFlats);

function getQuantityOfFlats(value) {
  const valueQuantityFlats = Number(inputQuantityOfFlats.value);
  if (!Number.isInteger(valueQuantityFlats) || valueQuantityFlats <= 0) {
    alert("Quantity must be a number");
  }

  console.log(valueQuantityFlats);
  const house_1 = new House({ flatsQuantity: valueQuantityFlats });

  console.log(house_1);
}

flatButton.addEventListener("click", getQuantityOfResidence);

function getQuantityOfResidence(value) {
  const valueQuantityResidence = Number(inputQuantityOfResidents.value);
  if (
    !Number.isInteger(valueQuantityResidence) ||
    valueQuantityResidence <= 0
  ) {
    alert("Quantity must be a number");
  }
  console.log(valueQuantityResidence);
  const flat_1 = new Flat({ residenceQuantity: valueQuantityResidence });
  console.log(flat_1);
}

residentButton.addEventListener("click", getNameResident);

function getNameResident(value) {
  const valueNameResident = inputNameOfResident.value;
  console.log(valueNameResident);
  const resident_1 = new Resident({ name: valueNameResident });
  console.log(resident_1);
}

showInfoButton.addEventListener("click", showInfo);

function showInfo() {
  infoContainer.innerHTML = `<p>Quantity of Flats:</p>
      <p>Quantity of Residents:</p>
      <p>Names of the Residents:</p>`;
}
