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

const submitButton = document.querySelector("#button-submit");
const bodyTable = document.querySelector("#user-table");
const formUser = document.querySelector("#user-form");
const inputName = document.querySelector("#user-name");
const inputEmail = document.querySelector("#user-email");

formUser.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(formUser);
  const valueName = formData.get("user-name");
  const valueEmail = formData.get("user-email");
  const userInputValue = [valueName, valueEmail];

  localStorage.setItem("userValues", JSON.stringify(userInputValue));
  const addedUserData = JSON.parse(localStorage.getItem("userValues"));

  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${addedUserData[0]}</td>
  <td>${addedUserData[1]}</td>
  <td>
  <button class="view">View</button>
  </td>
  <td>
   <button>Edit</button>
    <button>Save</button>
  </td>
  <td>
  <button class="remove">Remove</button>
   </td>
  `;

  bodyTable.appendChild(row);

  bodyTable.addEventListener("click", viewClick);

  function viewClick(event) {
    if (event.target.classList.contains("view")) {
      alert(`Full Name: ${addedUserData[0]} \n E-mail: ${addedUserData[1]}`);
    }
  }
}
