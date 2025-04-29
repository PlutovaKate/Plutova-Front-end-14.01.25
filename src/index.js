// ДЗ 37. Білд Gulp

// На основі одного із попередніх завдань:

// Підняти білд проекту, налаштувати мінімізацію та конкатенацію SCSS, JS коду
// Розібратися з налаштуванням плагінів
// Надсилаємо: вихідники, gulpfile.js та package.json

const AllCategories = ["Appliance", "Mobile", "Laptop"];
const appliance = ["Fridge", "Washing machine", "Hair dryer"];
const mobile = ["Samsung", "Apple", "Nokia"];
const laptop = ["Lenovo", "Acer", "LG"];
const price = 1000;

const body = document.querySelector("body");

const container = document.createElement("div");
container.style.display = "flex";
body.append(container);

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
  button.style.height = "75px";
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
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
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
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
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
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
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
    containerAllCategories.style.display = "none";
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

const totalPrice = document.querySelector("#total-price");
const quantityInput = document.querySelector("#quantity");
quantityInput.addEventListener("input", changePrice);
let totalPriceValue = 0;

function changePrice() {
  totalPriceValue = quantityInput.value * price;
  totalPrice.textContent = totalPriceValue;
  return totalPriceValue;
}

const today = new Date().toLocaleString("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const dateToday = document.querySelector(".date-today");
dateToday.textContent = today;

const form = document.querySelector("form");
btnBuy.addEventListener("click", showProductRegistrationForm);

function showProductRegistrationForm() {
  form.style.display = "flex";
}

const orderKey = `Order_${today}`;
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
    price: totalPriceValue,
    date: today,
    comment: formData.get("comment"),
  };

  const message = `Please check: \n
   Full name: ${values.fullName} \n
   City: ${values.city} \n
   Post: ${values.post} \n
   Payment: ${values.payment} \n
   Quantity: ${values.quantity} \n
   Price: ${values.price} $\n
   Date: ${values.date} \n
   Comment: ${values.comment} \n`;

  alert(message);

  localStorage.setItem(orderKey, JSON.stringify(values));

  containerAllCategories.style.display = "flex";
  form.style.display = "none";
}

const ordersBtn = document.querySelector(".btn_orders");
const ordersList = document.querySelector(".orders-list");
const titleList = document.querySelector(".title-list");

ordersBtn.addEventListener("click", makeListOfOrders);

function makeListOfOrders() {
  titleList.style.display = "block";
  containerAllCategories.style.display = "none";
  form.style.display = "none";
  ordersList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.startsWith("Order_")) continue;

    const orderData = JSON.parse(localStorage.getItem(key));
    const orderItem = document.createElement("li");
    orderItem.classList.add("order-item");

    let orderContent = `${orderData.date}: Total price: ${orderData.price} $`;
    orderItem.textContent = orderContent;

    const orderInfoBtn = document.createElement("button");
    orderInfoBtn.classList.add("order-infoBtn");
    orderInfoBtn.textContent = "More info...";
    orderItem.appendChild(orderInfoBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";
    orderItem.appendChild(deleteBtn);

    ordersList.appendChild(orderItem);

    orderInfoBtn.addEventListener("click", () => {
      alert(
        `Order Details:\nFull Name: ${orderData.fullName}\nCity: ${orderData.city}\nPost: ${orderData.post}\nPayment: ${orderData.payment}\nQuantity: ${orderData.quantity}\nPrice: ${orderData.price} $\nDate: ${orderData.date}\nComment: ${orderData.comment}`
      );
    });

    deleteBtn.addEventListener("click", () => {
      localStorage.removeItem(key);
      makeListOfOrders();
    });
  }
}
