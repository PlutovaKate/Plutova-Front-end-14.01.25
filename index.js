// ДЗ 21. Слайдер базовий

// Пишемо свій слайдер зображень
// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою Prev.

const images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];
console.log(images);
let currentIndex = 0;

const body = document.querySelector("body");
const img = document.createElement("img");
img.style.width = "300px";
img.setAttribute("src", images[currentIndex]);
body.appendChild(img);

const containerForBtn = document.createElement("div");
containerForBtn.style.display = "flex";
containerForBtn.style.justifyContent = "space-between";
containerForBtn.style.width = "300px";
body.appendChild(containerForBtn);

const prevBtn = document.createElement("button");
prevBtn.style.padding = "10px";
prevBtn.style.width = "80px";
prevBtn.style.borderRadius = "10px";
prevBtn.textContent = "Previous";
containerForBtn.appendChild(prevBtn);

const nextBtn = document.createElement("button");
nextBtn.style.padding = "10px";
nextBtn.style.width = "80px";
nextBtn.style.borderRadius = "10px";
nextBtn.textContent = "Next";
containerForBtn.appendChild(nextBtn);

function resetButton() {
  prevBtn.style.opacity = currentIndex === 0 ? 0 : 1;
  nextBtn.style.opacity = currentIndex === images.length - 1 ? 0 : 1;
}

nextBtn.addEventListener("click", nextPhoto);

function nextPhoto() {
  if (currentIndex < images.length - 1) {
    img.src = images[++currentIndex];
    resetButton();
  }
}

prevBtn.addEventListener("click", prevPhoto);

function prevPhoto() {
  if (currentIndex > 0) {
    img.src = images[--currentIndex];
    resetButton();
  }
}
