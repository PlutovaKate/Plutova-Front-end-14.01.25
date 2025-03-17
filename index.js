// ДЗ 17. Магазин з товарами, реалізувати з функціями

// Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах
//  (кожен товар на окремому рядку в консолі). Від користувача отримати номер товару
//  (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію),
//  вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн,
// розрахувати знижку в 20% і повідомити про це користувача.

const goods = [
  { number: 1, name: "televisor", price: "25000 grn", quantity: 25 },
  { number: 2, name: "fridge", price: "16000 grn", quantity: 13 },
  { number: 3, name: "mobile - phone", price: "24000 grn", quantity: 22 },
  { number: 4, name: "iron", price: "5000 grn", quantity: 46 },
  { number: 5, name: "hair - dryer", price: "3000 grn", quantity: 18 },
];

goods.map((product) => console.log(product));

function showProduct(
  allProducts,
  numberOfProductFromUser,
  quantityOfProductFromUser
) {
  allProducts.map((product) => {
    if (Number(numberOfProductFromUser) === product.number) {
      console.log(
        `Номер ${numberOfProductFromUser} відповідає товару ${product.name}, який коштує ${product.price} за одиницю`
      );

      if (Number(quantityOfProductFromUser) <= product.quantity) {
        let productPrise =
          Number(quantityOfProductFromUser) * Number.parseFloat(product.price);

        console.log(
          `${quantityOfProductFromUser} шт по ${product.price} за одиницю. Оформлюємо замовлення на загальну суму ${productPrise}`
        );

        if (productPrise > 10000) {
          let productPriseWithDiscount = productPrise - productPrise * 0.2;

          console.log(
            `Сума вашого замовлення більше 10 000грн, тому ви отримаєте знижку 20%. Сума замовлення зі знижкою буде ${productPriseWithDiscount} грн`
          );
        }
      } else {
        console.log(
          `${quantityOfProductFromUser} товарів не має в наявності. Залишилось ${product.quantity}`
        );
      }
    } else if (Number(numberOfProductFromUser) > 5) {
      console.log(
        "нажаль такого товару немає, спробуйте вибрати інший від 1 до 5"
      );
    } else {
      console.log("Щось пішло не так...");
    }
  });
}

showProduct(goods, 5, 1);

// * ускладнити практичне завдання запровадженням категорій товарів. Відповідно,
//  користувач може вибрати категорію товару, номер товару та кількість.
//  Потім результат його вибору з'явиться на сторінці
