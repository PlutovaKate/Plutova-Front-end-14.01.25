// Запросити у користувача рік народження.

// Запитати в нього, в якому місті він живе.

// Запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// Його вік.
// Якщо користувач запровадить Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицю якої він запровадив. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач запровадить один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати…” і підставляємо на місце точок ім'я та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення - "Шкода, що Ви не захотіли ввести свій(ю) ..." і вказуємо, що він не захотів вводити - дату народження, місто або вид спорту.

console.log("Рішення 1: ");

const year = prompt("Вкажи свій рік народження");

if (year === null || year.trim() === "") {
  console.log("Шкода, що ви не захотіли ввести свій рік народження");
  alert("Шкода, що ви не захотіли ввести свій рік народження");
} else {
  const city = prompt("В якому місті ти живеш?");
  const cityNormalized = city.toLowerCase();
  if (cityNormalized === null || cityNormalized.trim() === "") {
    console.log("Шкода, що ви не захотіли ввести місто, де ви живете");
    alert("Шкода, що ви не захотіли ввести місто, де ви живете");
  } else {
    const sport = prompt("Який твій улюблений вид спорту?");
    const sportNormalized = sport.toLowerCase();
    if (sportNormalized === null || sportNormalized.trim() === "") {
      console.log("Шкода, що ви не захотіли ввести спорт");
      alert("Шкода, що ви не захотіли ввести спорт");
    } else {
      const age = 2024 - year;

      let cityMessage = "";
      if (cityNormalized === "київ") {
        cityMessage = "Ти живеш у столиці України.";
      } else if (cityNormalized === "вашингтон") {
        cityMessage = "Ти живеш у столиці США.";
      } else if (cityNormalized === "лондон") {
        cityMessage = "Ти живеш у столиці Великобританії.";
      } else {
        cityMessage = `Ти живеш у місті ${city}`;
      }

      let sportMessage = "";
      if (sportNormalized === "футбол") {
        sportMessage = "Круто! Хочеш стати як Андрій Шевченко?";
      } else if (sportNormalized === "теніс") {
        sportMessage = "Круто! Хочеш стати як Еліна Світоліна?";
      } else if (sportNormalized === "плавання") {
        sportMessage = "Круто! Хочеш стати як Владислав Бухов?";
      } else {
        sportMessage = `Цікавий вид спорту: ${sport}`;
      }

      console.log(`Ваш вік: ${age} \n${cityMessage} \n${sportMessage}`);
      alert(`Ваш вік: ${age} \n${cityMessage} \n${sportMessage}`);
    }
  }
}

console.log("Рішення 2: ");

const birthday = prompt("Вкажи свій рік народження");

if (birthday === null || birthday.trim() === "") {
  console.log("Шкода, що ви не захотіли ввести свій рік народження");
  alert("Шкода, що ви не захотіли ввести свій рік народження");
} else {
  const town = prompt("В якому місті ти живеш?");
  const townNormalized = town.toLowerCase();
  if (townNormalized === null || townNormalized.trim() === "") {
    console.log("Шкода, що ви не захотіли ввести місто, де ви живете");
    alert("Шкода, що ви не захотіли ввести місто, де ви живете");
  } else {
    const champion = prompt("Який твій улюблений вид спорту?");
    const championNormalized = champion.toLowerCase();
    if (championNormalized === null || championNormalized.trim() === "") {
      console.log("Шкода, що ви не захотіли ввести спорт");
      alert("Шкода, що ви не захотіли ввести спорт");
    } else {
      const ageBirth = 2024 - birthday;

      let townMessage = "";
      switch (townNormalized) {
        case "київ":
          townMessage = "Ти живеш у столиці України.";
          break;
        case "вашингтон":
          townMessage = "Ти живеш у столиці США.";
          break;
        case "лондон":
          townMessage = "Ти живеш у столиці Великобританії.";
          break;
        default:
          townMessage = `Ти живеш у місті ${town}`;
          break;
      }

      let championMessage = "";
      switch (championNormalized) {
        case "футбол":
          championMessage = "Круто! Хочеш стати як Андрій Шевченко?";
          break;
        case "теніс":
          championMessage = "Круто! Хочеш стати як Еліна Світоліна?";
          break;
        case "плавання":
          championMessage = "Круто! Хочеш стати як Владислав Бухов?";
          break;

        default:
          championMessage = `Цікавий вид спорту: ${champion}`;
          break;
      }

      console.log(`Ваш вік: ${ageBirth} \n${townMessage} \n${championMessage}`);
      alert(`Ваш вік: ${ageBirth} \n${townMessage} \n${championMessage}`);
    }
  }
}
