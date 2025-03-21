// ДЗ 22. Функція generateList

// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3])
//  і генерує список з елементів

//    <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>

const array = [1, 2, 3];
const body = document.querySelector("body");

function generateList(array) {
  const ul_1 = document.createElement("ul");
  body.appendChild(ul_1);

  array.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul_1.appendChild(li);
    console.log(li);
    return li;
  });
}

generateList(array);

// Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3]) то робити вкладений список.
//  Для перевірки масиву використовуйте Array.isArray()

// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>
//     <ul>
//       <li>1.1</li>
//       <li>1.2</li>
//       <li>1.3</li>
//     </ul>
//   </li>
//   <li>3</li>
// </ul>

const array_1 = [1, 2, [3.1, 3.2, 3.3], 4];

function generateList(array) {
  const ul = document.createElement("ul");
  body.appendChild(ul);

  const ulInside = document.createElement("ul");

  array.map((item) => {
    const li = document.createElement("li");
    ul.appendChild(li);

    if (!Array.isArray(item)) {
      li.textContent = item;
    }

    if (Array.isArray(item)) {
      item.map((element) => {
        const liInside = document.createElement("li");
        liInside.textContent = element;
        ulInside.appendChild(liInside);
        li.appendChild(ulInside);
      });
    }
    return li;
  });
}

generateList(array_1);
