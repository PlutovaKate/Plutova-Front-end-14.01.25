// ДЗ 35. Чат-бот з браузером

// Навчити браузер відповідати через 1-10 секунд після повідомлення.

// Відповіді генеруються випадково з підготовленого масиву відповідей

// Браузер може будь-якої миті припинити діалог - інформація про це повинна вивестися користувачу

// Користувач може будь-якої миті припинити діалог написавши повідомлення, наприклад, “My watch has ended”.
//  Тоді браузер повинен ввічливо попрощатися.

// UI – примітивний

const answers = [
  "Напишіть своє питання",
  "Я можу вам допомогти",
  "Опишіть вашу проблему конкретніше",
  "Цікаво!",
  "Цікаво, а що ви думаєте з цього приводу?",
  "Ваша думка для мене важлива",
  "Як я можу вам допомогти?",
  "Я допоможу вам вирішити це питання",
  "Вже шукаю інформацію з приводу вашого питання",
  "Радий тебе бачити!",
];

const form = document.getElementById("form");
const ChatBotText = document.getElementById("ChatBotText");
const input = document.getElementById("userText");
let dialogActive = true;

function getRandomAnswer() {
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function browserQuit() {
  return Math.random() < 0.1;
}

function addMessage(message, sender) {
  const div = document.createElement("div");
  div.style.marginBottom = "10px";
  div.textContent = `${sender}: ${message}`;
  ChatBotText.appendChild(div);
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage || !dialogActive) return;

  addMessage(userMessage, "Користувач");

  if (userMessage === "My watch has ended") {
    addMessage("Дякую за спілкування! До зустрічі!", "Чатбот");
    dialogActive = false;
    return;
  }

  input.value = "";

  const randomTime = getRandomTime(1, 10) * 1000;

  setTimeout(() => {
    if (!dialogActive) return;

    if (browserQuit()) {
      addMessage("Вибач, я більше не можу продовжити діалог.", "Чатбот");
      dialogActive = false;
      return;
    }

    const botMessage = getRandomAnswer();
    addMessage(botMessage, "Чатбот");
  }, randomTime);
}
