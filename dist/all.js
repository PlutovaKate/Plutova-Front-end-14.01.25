"use strict";

// ДЗ 37. Білд Gulp

// На основі одного із попередніх завдань:

// Підняти білд проекту, налаштувати мінімізацію та конкатенацію SCSS, JS коду
// Розібратися з налаштуванням плагінів
// Надсилаємо: вихідники, gulpfile.js та package.json

var AllCategories = ["Appliance", "Mobile", "Laptop"];
var appliance = ["Fridge", "Washing machine", "Hair dryer"];
var mobile = ["Samsung", "Apple", "Nokia"];
var laptop = ["Lenovo", "Acer", "LG"];
var price = 1000;
var body = document.querySelector("body");
var container = document.createElement("div");
container.style.display = "flex";
body.append(container);
var containerAllCategories = document.createElement("div");
containerAllCategories.style.display = "flex";
containerAllCategories.style.flexDirection = "column";
containerAllCategories.style.width = "130px";
containerAllCategories.style.gap = "10px";
containerAllCategories.style.marginRight = "10px";
container.appendChild(containerAllCategories);
var buttonsAllCategories = AllCategories.map(function (item) {
  var button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item;
  button.style.height = "75px";
  containerAllCategories.appendChild(button);
  return button;
});
var applianceContainer = document.createElement("div");
applianceContainer.style.width = "130px";
applianceContainer.style.marginRight = "10px";
applianceContainer.classList.add("hidden");
container.appendChild(applianceContainer);
var buttonsFromAppliance = appliance.map(function (item) {
  var button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
  button.style.marginBottom = "10px";
  applianceContainer.appendChild(button);
  return button;
});
var buttonAppliance = buttonsAllCategories[0];
buttonAppliance.addEventListener("click", toggleAppliance);
function toggleAppliance() {
  applianceContainer.classList.toggle("hidden");
  mobileContainer.classList.add("hidden");
  laptopContainer.classList.add("hidden");
}
var mobileContainer = document.createElement("div");
mobileContainer.style.width = "130px";
mobileContainer.style.marginRight = "10px";
mobileContainer.classList.add("hidden");
container.appendChild(mobileContainer);
var buttonsFromMobile = mobile.map(function (item) {
  var button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
  button.style.marginBottom = "10px";
  mobileContainer.appendChild(button);
  return button;
});
var ButtonMobile = buttonsAllCategories[1];
ButtonMobile.addEventListener("click", toggleMobile);
function toggleMobile() {
  mobileContainer.classList.toggle("hidden");
  applianceContainer.classList.add("hidden");
  laptopContainer.classList.add("hidden");
}
var laptopContainer = document.createElement("div");
laptopContainer.style.width = "130px";
laptopContainer.style.marginRight = "10px";
laptopContainer.classList.add("hidden");
container.appendChild(laptopContainer);
var buttonsFromLaptop = laptop.map(function (item) {
  var button = document.createElement("button");
  button.classList.add("item");
  button.textContent = item + " " + price + "$";
  button.style.width = "130px";
  button.style.height = "75px";
  button.style.marginBottom = "10px";
  laptopContainer.appendChild(button);
  return button;
});
var buttonLaptop = buttonsAllCategories[2];
buttonLaptop.addEventListener("click", toggleLaptop);
function toggleLaptop() {
  laptopContainer.classList.toggle("hidden");
  applianceContainer.classList.add("hidden");
  mobileContainer.classList.add("hidden");
}
var infoContainer = document.createElement("div");
infoContainer.style.alignSelf = "center";
infoContainer.style.padding = "10px";
infoContainer.style.width = "130px";
container.appendChild(infoContainer);
var btnBuy = document.createElement("button");
function showProductInfo(product) {
  infoContainer.innerHTML = "";
  var infoText = document.createElement("p");
  infoText.style.textAlign = "center";
  infoText.textContent = "Information about ".concat(product, " ");
  infoContainer.appendChild(infoText);
  btnBuy.classList.add("byu");
  btnBuy.textContent = "Buy";
  infoText.appendChild(btnBuy);
  btnBuy.addEventListener("click", function () {
    alert("Item purchased. \n Please fill product registration form");
    infoContainer.innerHTML = "";
    containerAllCategories.style.display = "none";
    applianceContainer.classList.add("hidden");
    mobileContainer.classList.add("hidden");
    laptopContainer.classList.add("hidden");
  });
}
buttonsFromAppliance.forEach(function (button, index) {
  button.addEventListener("click", function () {
    return showProductInfo(appliance[index]);
  });
});
buttonsFromMobile.forEach(function (button, index) {
  button.addEventListener("click", function () {
    return showProductInfo(mobile[index]);
  });
});
buttonsFromLaptop.forEach(function (button, index) {
  button.addEventListener("click", function () {
    return showProductInfo(laptop[index]);
  });
});
var totalPrice = document.querySelector("#total-price");
var quantityInput = document.querySelector("#quantity");
quantityInput.addEventListener("input", changePrice);
var totalPriceValue = 0;
function changePrice() {
  totalPriceValue = quantityInput.value * price;
  totalPrice.textContent = totalPriceValue;
  return totalPriceValue;
}
var today = new Date().toLocaleString("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
var dateToday = document.querySelector(".date-today");
dateToday.textContent = today;
var form = document.querySelector("form");
btnBuy.addEventListener("click", showProductRegistrationForm);
function showProductRegistrationForm() {
  form.style.display = "flex";
}
var orderKey = "Order_".concat(today);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var formData = new FormData(form);
  var values = {
    fullName: formData.get("fullName"),
    city: formData.get("city"),
    post: formData.get("post"),
    payment: formData.get("payment"),
    quantity: formData.get("quantity"),
    price: totalPriceValue,
    date: today,
    comment: formData.get("comment")
  };
  var message = "Please check: \n\n   Full name: ".concat(values.fullName, " \n\n   City: ").concat(values.city, " \n\n   Post: ").concat(values.post, " \n\n   Payment: ").concat(values.payment, " \n\n   Quantity: ").concat(values.quantity, " \n\n   Price: ").concat(values.price, " $\n\n   Date: ").concat(values.date, " \n\n   Comment: ").concat(values.comment, " \n");
  alert(message);
  localStorage.setItem(orderKey, JSON.stringify(values));
  containerAllCategories.style.display = "flex";
  form.style.display = "none";
}
var ordersBtn = document.querySelector(".btn_orders");
var ordersList = document.querySelector(".orders-list");
var titleList = document.querySelector(".title-list");
ordersBtn.addEventListener("click", makeListOfOrders);
function makeListOfOrders() {
  titleList.style.display = "block";
  containerAllCategories.style.display = "none";
  form.style.display = "none";
  ordersList.innerHTML = "";
  var _loop = function _loop() {
    var key = localStorage.key(i);
    if (!key.startsWith("Order_")) return 1; // continue
    var orderData = JSON.parse(localStorage.getItem(key));
    var orderItem = document.createElement("li");
    orderItem.classList.add("order-item");
    var orderContent = "".concat(orderData.date, ": Total price: ").concat(orderData.price, " $");
    orderItem.textContent = orderContent;
    var orderInfoBtn = document.createElement("button");
    orderInfoBtn.classList.add("order-infoBtn");
    orderInfoBtn.textContent = "More info...";
    orderItem.appendChild(orderInfoBtn);
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";
    orderItem.appendChild(deleteBtn);
    ordersList.appendChild(orderItem);
    orderInfoBtn.addEventListener("click", function () {
      alert("Order Details:\nFull Name: ".concat(orderData.fullName, "\nCity: ").concat(orderData.city, "\nPost: ").concat(orderData.post, "\nPayment: ").concat(orderData.payment, "\nQuantity: ").concat(orderData.quantity, "\nPrice: ").concat(orderData.price, " $\nDate: ").concat(orderData.date, "\nComment: ").concat(orderData.comment));
    });
    deleteBtn.addEventListener("click", function () {
      localStorage.removeItem(key);
      makeListOfOrders();
    });
  };
  for (var i = 0; i < localStorage.length; i++) {
    if (_loop()) continue;
  }
}