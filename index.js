// ДЗ 33. Електронний годинник

// Реалізувати електронний годинник із зображеннями для кожної цифри та оновлення в DOM лише тих елементів,
//  значення для яких змінені - інші повинні залишитися недоторканими.

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const outputSpan = document.querySelector("#output");

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

    // console.log(timerStr);

    for (let index = 0; index < timerStr.length; index++) {
      const digit = timerStr[index];
      console.log(digit);

      // this.element.style.backgroundImage = `url('img/${digit}.png')`;
    }
    // const hours = date.getHours().toString().padStart(2, 0);
    // const minutes = date.getMinutes().toString().padStart(2, 0);
    // const seconds = date.getSeconds().toString().padStart(2, 0);

    // this.element.textContent = `${hours}:${minutes}:${seconds}`;
  };

  stop = function () {
    clearInterval(this.timerId);
  };
}

const clock = new Clock(outputSpan);

startBtn.addEventListener("click", clock.setUp.bind(clock));
stopBtn.addEventListener("click", clock.stop.bind(clock));
