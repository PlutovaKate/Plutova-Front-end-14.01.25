// ДЗ 24. Форма для реєстрації

// Пишемо форму для реєстрації

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка "Зберегти"
// Після натискання на кнопку, замість форми повинна виводитися "таблиця" з даними, які ввів користувач.

const userForm = document.querySelector("form");
const table = document.querySelectorAll("tbody tr td");
const containerForm = document.querySelector(".container-form");
const containerTable = document.querySelector(".container-table");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(userForm);
  const values = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    birthday: formData.get("Date of birth"),
    gender: formData.get("gender"),
    city: formData.getAll("city").join(", "),
    address: formData.get("address"),
    language: formData.getAll("language").join(", "),
    email: formData.get("email"),
  };

  table[0].textContent = values.name;
  table[1].textContent = values.surname;
  table[2].textContent = values.birthday;
  table[3].textContent = values.gender;
  table[4].textContent = values.city;
  table[5].textContent = values.address;
  table[6].textContent = values.language;
  table[7].textContent = values.email;

  containerForm.style.display = "none";
  containerTable.style.display = "block";
}
