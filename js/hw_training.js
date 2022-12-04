// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
// }

// #==============

// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// const checkType = (value) => {
//   if (Array.isArray(value)) {
//     return "Array";
//   } else if (value === null) {
//     return "null";
//   }
//   return typeof value;
// };

// console.log(checkType(1));
// console.log(checkType("ghghghgh"));
// console.log(checkType(true));
// console.log(checkType(undefined));
// console.log(checkType({}));
// console.log(checkType([]));
// console.log(checkType(null));

// #==============

// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const multiplyNumeric = obj => {
//   for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));

// #==============

// /У нас є об'єкт, в якому зберігаються зарплати
// //нашої команди
// //Напишіть код для обчислення суми всіх зарплат і
// //збережіть його результат у змінній sum.
// //Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// const calcSalaries = (salaries) => {
//   // let totalSalarie = 0;
//   // for (let key in salaries) {
//   //   totalSalarie += salaries[key];
//   // }
//   // return totalSalarie;
// return Object.values(salaries).reduce((totalSalarie, item) => totalSalarie + item,0)

// }

// console.log(calcSalaries(salaries))

// #==============

// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// #==============

// https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

// #==============

// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи
// prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення,
// порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом,
// не зупиняйте введення значень під час введення «0».

// const sumInput = () => {
//   const numbers = [];

//   while (true) {
//     const value = prompt("Enter number");

//     const number = Number(value);

//     if (value === null || value.trim() === "" || !isFinite(value)) {
//       break;
//     }

//     numbers.push(number);
//   }

//   console.log(numbers);
//   return numbers.reduce((acc, number) => acc + number, 0);
// };

// console.log(sumInput());

// #==============

// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого
// масиву.
// let arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// const deleteElement = (arr, removeEl, replaceEl) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === removeEl) {
//       arr.splice(i, 1, replaceEl);
//     }
//   }

//   return arr.filter(el => el !== removeEl);

// }

// console.log(deleteElement(arr, 56, 1));
// console.log(arr);

// #==============

// / Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunkArray = (array, devider) => {
//   let index = 0;
//   const newArrey = [];
//   while (index < array.length)

//   {
//     const chunk = array.slice(index, devider + index)
//     newArrey.push(chunk);
//     index += devider;
//   }
//   return newArrey
// }

// console.log(chunkArray(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// #==============

// let strings = [
//   "торт",
//   "шоколад",
//   "кекс",
//   "сир",
//   "бутерброд",
//   "масло",
//   "жиле",
//   "каша",
//   "олія",
// ];

// const firstLetterToUpperCase = (array) => {
//   return array.map((str) => `${str[0].toUpperCase()}${str.slice(1)}`);
// };

// console.log(firstLetterToUpperCase(strings));
