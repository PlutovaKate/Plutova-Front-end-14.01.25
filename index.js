// ДЗ 19. Знайомство з DOM

// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією.
// При зникненні фокуса - так само пропадає

const input = document.createElement("input");
const body = document.querySelector("body");
body.appendChild(input);

const div = document.createElement("div");
div.style.backgroundColor = "lightBlue";
div.style.padding = "5px";
div.style.borderRadius = "20px";
div.style.position = "absolute";
div.style.left = "12%";
div.style.top = "17%";
div.style.display = "none";
body.appendChild(div);

const paragraph = document.createElement("p");
paragraph.textContent = "Введіть слово для пошуку";
div.appendChild(paragraph);

input.addEventListener("focus", focusHandler);
input.addEventListener("blur", blurHandler);

function focusHandler() {
  div.style.display = "block";
  input.removeEventListener("focus", focusHandler);
}

function blurHandler() {
  div.style.display = "none";
  input.addEventListener("focus", focusHandler);
}

// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
//  при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
//  Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

const divForButton = document.createElement("div");
divForButton.style.marginTop = "100px";
body.appendChild(divForButton);

const buttons = ["Кнопка 1", "Кнопка 2"].map((text) => {
  const button = document.createElement("a");
  button.textContent = text;
  button.style.backgroundColor = "#0085ff";
  button.style.borderRadius = "20px";
  button.style.padding = "20px";
  button.style.marginRight = "20px";
  button.style.color = "white";
  divForButton.appendChild(button);
  return button;
});

const button_1 = document.querySelectorAll("a")[0];
const button_2 = document.querySelectorAll("a")[1];

button_1.addEventListener("click", enterLink);
let link = "";

function enterLink() {
  link = prompt("Введіть посилання");

  if (!(link.startsWith("http://") || link.startsWith("https://"))) {
    link = "https://" + link;
  }
  console.log(link);
  return link;
}

button_2.addEventListener("click", followLink);

function followLink() {
  button_2.setAttribute("href", link);
}

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)
