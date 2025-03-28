// ДЗ 25. Модифікувати інтернет-магазин (форма)

// Додати до попереднього завдання з інтернет-магазином:

// В інформації товару - кнопка "купити"

// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// коментар до замовлення
// Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені.
//  Інакше виводити помилку на сторінку
// Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

const AllCategories = ["Appliance", "Mobile", "Laptop"];
const appliance = ["Fridge", "Washing machine", "Hair dryer"];
const mobile = ["Samsung", "Apple", "Nokia"];
const laptop = ["Lenovo", "Acer", "LG"];

const body = document.querySelector("body");

const container = document.createElement("div");
container.style.display = "flex";
body.prepend(container);

const containerAllCategories = document.createElement("div");
containerAllCategories.style.display = "flex";
containerAllCategories.style.flexDirection = "column";
containerAllCategories.style.width = "130px";
containerAllCategories.style.gap = "10px";
containerAllCategories.style.marginRight = "10px";
container.appendChild(containerAllCategories);

const buttonsAllCategories = AllCategories.map((item) => {
  const button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item;
  button.style.height = "60px";
  containerAllCategories.appendChild(button);

  return button;
});

const applianceContainer = document.createElement("div");
applianceContainer.style.width = "130px";
applianceContainer.style.marginRight = "10px";
applianceContainer.classList.add("hidden");
container.appendChild(applianceContainer);

const buttonsFromAppliance = appliance.map((item) => {
  const button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item;
  button.style.width = "130px";
  button.style.height = "60px";
  button.style.marginBottom = "10px";
  applianceContainer.appendChild(button);

  return button;
});

const buttonAppliance = buttonsAllCategories[0];
buttonAppliance.addEventListener("click", toggleAppliance);

function toggleAppliance() {
  applianceContainer.classList.toggle("hidden");
  mobileContainer.classList.add("hidden");
  laptopContainer.classList.add("hidden");
}

const mobileContainer = document.createElement("div");
mobileContainer.style.width = "130px";
mobileContainer.style.marginRight = "10px";
mobileContainer.classList.add("hidden");
container.appendChild(mobileContainer);

const buttonsFromMobile = mobile.map((item) => {
  const button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item;
  button.style.width = "130px";
  button.style.height = "60px";
  button.style.marginBottom = "10px";
  mobileContainer.appendChild(button);

  return button;
});

const ButtonMobile = buttonsAllCategories[1];
ButtonMobile.addEventListener("click", toggleMobile);

function toggleMobile() {
  mobileContainer.classList.toggle("hidden");
  applianceContainer.classList.add("hidden");
  laptopContainer.classList.add("hidden");
}

const laptopContainer = document.createElement("div");
laptopContainer.style.width = "130px";
laptopContainer.style.marginRight = "10px";
laptopContainer.classList.add("hidden");
container.appendChild(laptopContainer);

const buttonsFromLaptop = laptop.map((item) => {
  const button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item;
  button.style.width = "130px";
  button.style.height = "60px";
  button.style.marginBottom = "10px";
  laptopContainer.appendChild(button);

  return button;
});

const buttonLaptop = buttonsAllCategories[2];
buttonLaptop.addEventListener("click", toggleLaptop);

function toggleLaptop() {
  laptopContainer.classList.toggle("hidden");
  applianceContainer.classList.add("hidden");
  mobileContainer.classList.add("hidden");
}

const infoContainer = document.createElement("div");
infoContainer.style.alignSelf = "center";
infoContainer.style.padding = "10px";
infoContainer.style.width = "130px";
container.appendChild(infoContainer);

const btnBuy = document.createElement("button");

function showProductInfo(product) {
  infoContainer.innerHTML = "";
  const infoText = document.createElement("p");
  infoText.style.textAlign = "center";
  infoText.textContent = `Information about ${product} `;
  infoContainer.appendChild(infoText);

  btnBuy.classList.add("byu");
  btnBuy.textContent = "Buy";
  infoText.appendChild(btnBuy);

  btnBuy.addEventListener("click", () => {
    alert("Item purchased. \n Please fill product registration form");
    infoContainer.innerHTML = "";
    applianceContainer.classList.add("hidden");
    mobileContainer.classList.add("hidden");
    laptopContainer.classList.add("hidden");
  });
}

buttonsFromAppliance.forEach((button, index) => {
  button.addEventListener("click", () => showProductInfo(appliance[index]));
});

buttonsFromMobile.forEach((button, index) => {
  button.addEventListener("click", () => showProductInfo(mobile[index]));
});

buttonsFromLaptop.forEach((button, index) => {
  button.addEventListener("click", () => showProductInfo(laptop[index]));
});

const form = document.querySelector("form");
btnBuy.addEventListener("click", showProductRegistrationForm);

function showProductRegistrationForm() {
  form.style.display = "flex";
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const values = {
    fullName: formData.get("fullName"),
    city: formData.get("city"),
    post: formData.get("post"),
    payment: formData.get("payment"),
    quantity: formData.get("quantity"),
    comment: formData.get("comment"),
  };

  const message = `Please check: \n
   Full name: ${values.fullName} \n
   City: ${values.city} \n
   Post: ${values.post} \n
   Payment: ${values.payment} \n
   Quantity: ${values.quantity} \n
   Comment: ${values.comment} \n`;

  alert(message);
}
