// ДЗ 27. CRUD додаток для users

// Створити CRUD-додаток (Create, Read, Update, Delete):

// Виводиться список користувачів із кнопками “Edit”, “Remove”, “View” біля кожного користувача
// (use data-id attributes або event delegation)
// список користувачів отримувати з js-файлу (масив об'єктів / використовувати функції-конструктори – за бажанням)

// При натисканні на кнопку “View” відкриваються дані користувача у блоці під списком
// При натисканні на кнопку “Edit” з'являється можливість редагувати дані в блоці під списком.
//  Дані зберігаються при натисканні на кнопку “Save” та оновлюють дані у списку
// При натисканні на кнопку “Remove” користувач видаляється зі списку
// Обов'язково підтвердження видалення (для уникнення видалення помилково)
// Реалізувати можливість додавання нових користувачів
// Бажано перевикористовувати форму редагування
// При додаванні користувач з'являється у списку
// Після перезавантаження сторінки всі зміни повинні зберігатись (використовувати localStorage)

const form = document.querySelector("#user-form");
const inputName = document.querySelector("#user-name");
const inputEmail = document.querySelector("#user-email");
const inputId = document.querySelector("#user-id");
const tableBody = document.querySelector("#user-table");
const userDetails = document.querySelector("#user-details");
const formTitle = document.querySelector("#form-title");

window.addEventListener("load", renderTable);

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function renderTable() {
  tableBody.innerHTML = "";
  const users = getUsers();
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button data-action="view" data-id="${user.id}">View</button></td>
      <td><button data-action="edit" data-id="${user.id}">Edit</button></td>
      <td><button data-action="delete" data-id="${user.id}">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = inputId.value || Date.now().toString();
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();

  let users = getUsers();
  const existingIndex = users.findIndex((user) => user.id === id);

  const userData = { id, name, email };

  if (existingIndex > -1) {
    users[existingIndex] = userData;
  } else {
    users.push(userData);
  }

  saveUsers(users);
  renderTable();
  form.reset();
  formTitle.textContent = "Add User";
});

tableBody.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  const id = event.target.dataset.id;
  const users = getUsers();
  const user = users.find((u) => u.id === id);

  if (!user) return;

  switch (action) {
    case "view":
      userDetails.innerHTML = `<strong>Name:</strong> ${user.name}<br><strong>Email:</strong> ${user.email}`;
      break;
    case "edit":
      inputName.value = user.name;
      inputEmail.value = user.email;
      inputId.value = user.id;
      formTitle.textContent = "Edit User";
      break;
    case "delete":
      if (confirm(`Are you sure you want to delete ${user.name}?`)) {
        const newUsers = users.filter((u) => u.id !== id);
        saveUsers(newUsers);
        renderTable();
        userDetails.innerHTML = "";
      }
      break;
  }
});
