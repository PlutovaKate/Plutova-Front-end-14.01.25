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

const houseForm = document.getElementById("houseForm");
const apartmentsFormContainer = document.getElementById(
  "apartmentsFormContainer"
);
const resultContainer = document.getElementById("resultContainer");
const housesList = document.getElementById("housesList");
const houseFormContainer = document.getElementById("houseFormContainer");
const quantityOfFlats = document.getElementById("quantityOfFlats");
const numberOfResidents = document.getElementById("numberOfResidents");

let houses = [];
let flatCount = 0;
let residentsPerFlat = 0;
let houseIdCounter = 1;
let currentHouse;

class Resident {
  constructor(name) {
    this.name = name;
  }
}

class Flat {
  constructor() {
    this.residents = [];
  }

  addResidents(resident) {
    this.residents.push(resident);
  }
}

class House {
  constructor(id) {
    this.id = id;
    this.flats = [];
  }

  addFlats(flat) {
    this.flats.push(flat);
  }

  getHouseInfo() {
    let info = `🏠 House № ${this.id} consists of ${this.flats.length} flats: \n`;
    this.flats.forEach((flat, i) => {
      info += `Flat ${i + 1} contains ${flat.residents.length} residents:\n`;
      flat.residents.forEach((res) => {
        info += `- ${res.name}\n`;
      });
    });
    return info;
  }
}

houseForm.addEventListener("submit", getDataFromHouseForm);

function getDataFromHouseForm(event) {
  event.preventDefault();

  flatCount = parseInt(quantityOfFlats.value, 10);
  residentsPerFlat = parseInt(numberOfResidents.value, 10);

  if (!flatCount || !residentsPerFlat) {
    alert("Please fill in all fields");
    return;
  }

  currentHouse = new House(houseIdCounter++);
  generateFlatForm(flatCount, residentsPerFlat);
}

function generateFlatForm(flatCount, residentsPerFlat) {
  houseFormContainer.style.display = "none";

  apartmentsFormContainer.innerHTML = `<h2>Fill in the residents for the House №${currentHouse.id}</h2><form id="residentsForm"></form>`;
  const residentsForm = document.getElementById("residentsForm");

  for (let index = 0; index < flatCount; index++) {
    const flatDiv = document.createElement("div");
    flatDiv.innerHTML = `<h3>Flat ${index + 1}</h3>`;

    for (let j = 0; j < residentsPerFlat; j++) {
      flatDiv.innerHTML += `
        <label>Resident ${j + 1}:
          <input type="text" name="apt${index}_res${j}" required>
        </label><br>`;
    }

    residentsForm.appendChild(flatDiv);
  }

  residentsForm.innerHTML += `
    <button type="submit">Save house</button>
    <button type="button" onclick="cancelHouseCreation()">Return</button>
  `;

  residentsForm.addEventListener("submit", onSaveHouse);

  function onSaveHouse(event) {
    event.preventDefault();
    const formData = new FormData(residentsForm);

    for (let index = 0; index < flatCount; index++) {
      const flat = new Flat();

      for (let j = 0; j < residentsPerFlat; j++) {
        const name = formData.get(`apt${index}_res${j}`);
        if (!name.trim()) {
          alert("Name must be filled in");
          return;
        }
        const resident = new Resident(name);
        flat.addResidents(resident);
      }
      currentHouse.addFlats(flat);
    }

    houses.push(currentHouse);
    currentHouse = null;
    apartmentsFormContainer.innerHTML = "";
    houseForm.reset();
    houseFormContainer.style.display = "block";
    renderHousesList();
  }
}

function renderHousesList() {
  if (houses.length === 0) {
    housesList.innerHTML = "";
    return;
  }

  let html = `<h2>List of houses</h2><ul>`;
  houses.forEach((house) => {
    html += `<li>
      House №${house.id} — flats: ${house.flats.length}
      <button onclick="showHouseInfo(${house.id})">Details</button>
    </li>`;
  });
  html += `</ul>`;
  housesList.innerHTML = html;
}

function showHouseInfo(houseId) {
  const house = houses.find((h) => h.id === houseId);
  if (house) {
    resultContainer.innerHTML = `
      <h2>Information about the house #${house.id}</h2>
      <pre>${house.getHouseInfo()}</pre>
      <button onclick="closeHouseInfo()">Close</button>
    `;
  }
}

function closeHouseInfo() {
  resultContainer.innerHTML = "";
}

function cancelHouseCreation() {
  currentHouse = null;
  houseFormContainer.style.display = "block";
  apartmentsFormContainer.innerHTML = "";
}
