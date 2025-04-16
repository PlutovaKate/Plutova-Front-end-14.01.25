// ДЗ 34. Слайдер з таймером

// Реалізувати слайдер

// Змінює кожні 3 секунди зображення (масив із 5+ зображень)
// Реалізувати перемикання за стрілками.
// Слайдер має працювати циклічно: після досягнення останнього зображення і
//  при натисканні на кнопку Next - показувати перше зображення
// Слайдер пишемо самі, варіанти з інтернету не використовуємо

const images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
];

let currentImage = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const img = document.getElementById("img");
img.setAttribute("src", images[currentImage]);

nextBtn.addEventListener("click", showNextImg);

function showNextImg() {
  currentImage = (currentImage + 1) % images.length;
  img.src = images[currentImage];
  console.log(img.src);
}

prevBtn.addEventListener("click", showPrevImg);

function showPrevImg() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  img.src = images[currentImage];
  console.log(img.src);
}

setInterval(showNextImg, 3000);
