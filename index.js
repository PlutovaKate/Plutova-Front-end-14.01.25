// ДЗ 18. this chain

// The ladder (сходи) – об'єкт, який дозволяє підійматися вгору та спускатися:

// let ladder = {
//   step: 0,
//   up: function () {
//     this.step++;
//   },
//   down: function () {
//     this.step--;
//   },
//   showStep: function () {
//     // показує теперішню сходинку
//     alert(this.step);
//   },
// };

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.down());
// console.log(ladder.showStep()); // 1

// Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    // показує теперішню сходинку
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep(); // 1
