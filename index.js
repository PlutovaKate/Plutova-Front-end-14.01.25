// ДЗ 20. Голосування за смайлики

// Створити програму для відображення результатів голосування. Як варіанти відповіді - смайлики. За замовчуванням 5 шт.

// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл

// При натисканні на смайл - під ним змінюється значення лічильника

// Реалізувати таким чином, щоб додавання нових варіантів відповіді не призводило до додавання нових функцій

const body = document.querySelector("body");
const emojis = ["❤", "😐", "😡", "💯", "☕"];
const containerForBtn = document.createElement("div");
body.appendChild(containerForBtn);
const containerForParagraph = document.createElement("div");
containerForParagraph.style.display = "flex";
body.appendChild(containerForParagraph);

emojis.map((emoji) => {
  let counter = 0;

  const button = document.createElement("button");
  button.style.width = "50px";
  button.style.backgroundColor = "lightBlue";
  button.style.marginRight = "20px";
  button.textContent = emoji;
  containerForBtn.appendChild(button);

  const paragraph = document.createElement("p");
  paragraph.style.width = "50px";
  paragraph.style.marginRight = "20px";
  paragraph.style.textAlign = "center";
  paragraph.textContent = counter;
  paragraph.style.backgroundColor = "lightBlue";
  containerForParagraph.appendChild(paragraph);

  button.addEventListener("click", () => {
    counter++;
    paragraph.textContent = counter;
  });
});
