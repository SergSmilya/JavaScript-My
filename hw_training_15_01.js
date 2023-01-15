console.log("hello wrold");

// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ['car.png', 'grass.png', 'avatar.png', 'user.png', 'sea.png', 'water.png', 'bird.png'];
// const baseUrl = {domain: 'domain-name.com'};
// let uploadedFiles = [];
//
// const resultUploadedFiles = [
//   'domain-name.com/upload/car.png',
//   'domain-name.com/upload/grass.png',
//   'domain-name.com/upload/avatar.png',
//   'domain-name.com/upload/user.png',
//   'domain-name.com/upload/sea.png',
//   'domain-name.com/upload/water.png',
//   'domain-name.com/upload/bird.png'
// ];
//  map, reduce, forEach
// imagesName.forEach(function (name) {
//   uploadedFiles.push(`${this.domain}/upload/${name}`);
// }, baseUrl);
// console.log(uploadedFiles);

// uploadedFiles = imagesName.map((name) => `${baseUrl.domain}/upload/${name}`);
// console.log(uploadedFiles);

// uploadedFiles = imagesName.reduce((acc, name) => {
//   console.log(acc);
//   acc.push(`${baseUrl.domain}/upload/${name}`);
//   return acc;
// }, []);

// ****************************

// / Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const tShirt = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }
//
// const jeans = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }
//
//
// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];

// function addItemToBascket(good) {
//   const currentItem = basketItems.find((product) => product.id === good.id);
//   console.log(currentItem);
//   if (currentItem) {
//     basketItems = basketItems.map((product) => {
//       if (product.id === good.id) {
//         return {
//           ...product,
//           count: product.count + 1,
//         };
//       } else {
//         return product;
//       }
//     });
//   } else {
//     basketItems.push(good);
//   }
// }

// console.log(basketItems);
// addItemToBascket(jeans);
// addItemToBascket(tShirt);
// console.log(basketItems);

// total = basketItems.reduce(
//   (acc, product) => (acc += product.price * product.count),
//   0
// );

// console.log(total);

// ****************************

// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const link =
//   "https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311";

// const url = new URL(link);
// console.log(url);
// const { search } = url;
// console.log(search);

// const sliceSearch = search.slice(1);
// console.log(sliceSearch);

// const searchArr = sliceSearch.split("&");
// console.log(searchArr);

// const params = searchArr.reduce((acc, param) => {
//   const [key, value] = param.split("=");
//   //   acc[paramArr[0]] = paramArr[1];
//   acc[key] = value;
//   return acc;
// }, {});

// console.log(params);

// ****************************

// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

// const input = "Every developer likes to mix kubernetes and javascript";
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'

// const newArr = input.split(" ");
// console.log(newArr);

// const result = newArr
//   .map((string) => {
//     const { length } = string;
//     if (length > 4) {
//       const firstLetter = string[0];
//       const lastLetter = string[length - 1];
//       return `${firstLetter}${length - 2}${lastLetter}`;
//     }
//     return string;
//   })
//   .join(" ");

// console.log(result);
// ****************************

// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// const input = 'George Raymond Richard Martin';
// Result
// 'GRRM'
// ****************************

// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]
// ****************************

// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// function totalVotes(arr) {
//   // your code here
// }
//
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// console.log(totalVotes(voters)); // 7
// ****************************
// Маючи набір усіх елементів вашого списку бажань, обчисліть, скільки коштуватиме, щоб просто купити все одразу

// function shoppingSpree(arr) {
//   // your code here
// }
//
// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "World tour", price: 25000 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
//
// console.log(shoppingSpree(wishlist)); // 225000
// ****************************

// Порахувати суму кожного додятнього елемента
// Якщо дані вхідні дані є масивом чисел, повернути суму всіх додатніх. Якщо масив порожній або в ньому немає додатних чисел, поверніть 0.
//

// const input = [ 1, -4, 12, 0, -3, 29, -150];
// Result
// 42
// Потрібно видалити товар із корзини
// id: 28
// ****************************

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
//   {
//     id: 33,
//     title: 'T-shirt',
//     price: 99,
//     count: 1,
//   }
// ];// Потрібно видалити товар із корзини
// // id: 28

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
//   {
//     id: 33,
//     title: 'T-shirt',
//     price: 99,
//     count: 1,
//   }
// ];

// let basketItems = [
//   {
//     id: 28,
//     title: "iPhone 14",
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: "Jeans",
//     price: 199,
//     count: 2,
//   },
//   {
//     id: 33,
//     title: "T-shirt",
//     price: 99,
//     count: 1,
//   },
// ];

// function removeProduct(id) {
//   return basketItems.filter((item) => item.id != id);
// }
// console.log(removeProduct(28));
// ****************************

// Напишіть функцію, яка рахує кількість входжень значення в масив
// let arr = [2,4,3,1,2,1];
// Очікуваний результат: (arr, 1) => 2
// ****************************

// Ви маєте масив об'єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх на масив імен за порядком зростання, за віком.
// Наприклад:
//
// let jhon = { name: "Jhon", age: 26 };
// let bruce = { name: "Bruce", age: 24 };
// let maria = { name: "Maria", age: 28 };
//
// let users = [ jhon, bruce, maria ];
//
// let names = /* ... ваш код */
//
// alert(names); // Bruce, Jhon, Maria
