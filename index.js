// ДЗ 32. Журнал студентів

// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
//  І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
//  але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на
//  чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який
// захист від того, щоб у масиві відвідуваності не могло бути більше ніж 25 записів. Масив – це властивість, present та
//  absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
//  і якщо середня оцінка більше ніж 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
//  якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишете цей конструктор, створити 2-3 екземпляри (конкретних студентів) і
//  показати використання цих методів.

class Student {
  constructor({ name, surName, birth, grades } = {}) {
    (this.name = name),
      (this.surName = surName),
      (this.birth = birth),
      (this.grades = grades);
    this.attendance = new Array(25).fill(null);
    this.currentLesson = 0;
  }

  getAge() {
    let year = new Date().getFullYear();
    return year - this.birth;
  }

  getAverageGrades() {
    let gradeLength = this.grades.length;
    let total = this.grades.reduce((sum, grade) => {
      return (sum += grade);
    }, 0);

    return total / gradeLength;
  }

  present() {
    if (this.currentLesson < 25) {
      this.attendance[this.currentLesson] = true;
      this.currentLesson += 1;
    }
  }

  absent() {
    if (this.currentLesson < 25) {
      this.attendance[this.currentLesson] = false;
      this.currentLesson += 1;
    }
  }

  summary() {
    const middleGrade = this.getAverageGrades();
    const quantityAttendance = this.attendance.filter(
      (att) => att === true
    ).length;
    const quantityLessons = this.attendance.filter(
      (att) => att !== null
    ).length;
    const middleAtendance = quantityAttendance / quantityLessons;

    if (middleGrade > 90 && middleAtendance > 0.9) {
      return "Молодець!";
    } else if (middleGrade > 90 || middleAtendance > 0.9) {
      return "Добре, але можна краще!";
    } else {
      return "Редиска!";
    }
  }
}

const student_1 = new Student({
  name: "Kate",
  surName: "Plutova",
  birth: 1987,
  grades: [90, 91, 92, 96],
});

student_1.present();
student_1.absent();
student_1.present();
student_1.present();
student_1.absent();
student_1.summary();

console.log(`${student_1.name} ${student_1.surName}: ${student_1.summary()}`);

const student_2 = new Student({
  name: "Alex",
  surName: "Fesenko",
  birth: 1976,
  grades: [99, 98, 100, 100],
});

student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();

console.log(`${student_2.name} ${student_2.surName}: ${student_2.summary()}`);

const student_3 = new Student({
  name: "Joe",
  surName: "Mango",
  birth: 2006,
  grades: [58, 48, 80, 20],
});

student_3.present();
student_3.present();
student_3.absent();
student_3.absent();
student_3.absent();

console.log(`${student_3.name} ${student_3.surName}: ${student_3.summary()}`);
