// ДЗ 29. Сутність HTML-елемента

// Створити сутність HTML-елемента

// Властивості:
// Назва тега
// Масив атрибутів
// ….

// Методи
// Метод виведення елемента
// Додатково, на власний розсуд
// Результат - можливість використання цього класу замість тонни boilerplate коду для створення нових елементів
// (createElement, setAttributes, appendChild etc)

const HtmlElement = function ({ tagName, textContent, attributes = [] } = {}) {
  this.tagName = tagName;
  this.attributes_1 = attributes[0];
  this.attributes_2 = attributes[1];
  this.textContent = textContent;
};

const h1Element = new HtmlElement({
  tagName: "h1",
  textContent: "This is textContent in tag 'h1'",
});

const imgElement = new HtmlElement({
  tagName: "img",
  attributes: ["alt", "src"],
  textContent: "",
});

const pElement = new HtmlElement({
  tagName: "p",
  textContent: "This is textContent in tag 'p'",
});
HtmlElement.prototype.createElement = function () {
  const body = document.querySelector("body");
  const element = document.createElement(this.tagName);
  element.textContent = this.textContent;
  if (this.tagName === "img") {
    element.setAttribute(this.attributes_1, "image");
    element.setAttribute(this.attributes_2, "./img/2.jpg");
  }

  body.appendChild(element);
};

h1Element.createElement();
imgElement.createElement();
pElement.createElement();
