// ДЗ 23. Подоба інтернет-магазину

// Реалізувати подобу інтернет-магазину

// Дано 3 блоки

// У лівій частині сторінки – перелік категорій.

// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.

// Клік на товар – інформацію про товар у правому блоці.

// В інформації товару - кнопка "купити"

// При натисканні на “купити” з'являється повідомлення, що товар куплено та повернення у вихідний стан програми
// (коли відображається лише список категорій)

const AllCategories = ["Appliance", "Mobile", "Laptop"];
const appliance = ["Fridge", "Washing machine", "Hair dryer"];
const mobile = ["Samsung", "Apple", "Nokia"];
const laptop = ["Lenovo", "Acer", "LG"];

const body = document.querySelector("body");

const container = document.createElement("div");
container.style.display = "flex";
body.appendChild(container);

const containerAllCategories = document.createElement("div");
containerAllCategories.style.display = "flex";
containerAllCategories.style.flexDirection = "column";
containerAllCategories.style.width = "130px";
containerAllCategories.style.gap = "10px";
containerAllCategories.style.marginRight = "10px";
container.appendChild(containerAllCategories);

const buttonsAllCategories = AllCategories.map((item) => {
  const button = document.createElement("button");
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
infoContainer.style.width = "130px";
container.appendChild(infoContainer);

function showProductInfo(product) {
  infoContainer.innerHTML = "";
  const infoText = document.createElement("p");
  infoText.style.textAlign = "center";
  infoText.textContent = `Information about ${product} `;
  infoContainer.appendChild(infoText);

  const btnBuy = document.createElement("button");
  btnBuy.textContent = "Buy";
  infoText.appendChild(btnBuy);

  btnBuy.addEventListener("click", () => {
    alert("Item purchased");
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
