// ДЗ 33. Електронний годинник

// Реалізувати електронний годинник із зображеннями для кожної цифри та оновлення в DOM лише тих елементів,
//  значення для яких змінені - інші повинні залишитися недоторканими.

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const container = document.querySelector("#container");

class Clock {
  constructor(element) {
    this.element = element;
    this.timerId = null;
  }

  setUp = function () {
    this.timerId = setInterval(this.updateCounter.bind(this), 1000);
  };

  updateCounter = function () {
    const date = new Date();

    const timerStr = [
      date.getHours().toString().padStart(2, 0),
      date.getMinutes().toString().padStart(2, 0),
      date.getSeconds().toString().padStart(2, 0),
    ].join("");

    for (let index = 0; index < timerStr.length; index++) {
      container.innerHTML = `<img src=./img/${timerStr[0]}.png /> <img src=./img/${timerStr[1]}.png /> :
       <img src=./img/${timerStr[2]}.png /> <img src=./img/${timerStr[3]}.png /> : <img src=./img/${timerStr[4]}.png /> <img src=./img/${timerStr[5]}.png />`;
    }
  };

  stop = function () {
    clearInterval(this.timerId);
  };
}

const clock = new Clock(container);

startBtn.addEventListener("click", clock.setUp.bind(clock));
stopBtn.addEventListener("click", clock.stop.bind(clock));
