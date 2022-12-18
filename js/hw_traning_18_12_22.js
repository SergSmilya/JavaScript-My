console.log("Hello");
// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str, callback) {
//   return str
//     .split("-")
//     .map((item, index) => (index === 0 ? item : callback(item)))
//     .join("");
// }
// console.log(camelize("background-color", toUpperFirstLetter));
// console.log(camelize("list-style-image", toUpperFirstLetter));
// console.log(camelize("-webkit-transition", toUpperFirstLetter));

// function toUpperFirstLetter(str) {
//   return str[0].toUpperCase() + `${str.slice(1)}`;
// }

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// function each(array, callback) {
//   const resultArr = [];
//   for (let i = 0; i < array.length; i++) {
//     const newItem = callback(array[i]);
//     resultArr.push(newItem);
//   }
//   return resultArr;
// }

// console.log(each([1, 2, 3], (num) => num * 2));

// / Напишіть дві функції
// makeProduct(назва, ціна, callback) - приймає
// ім`я і ціну товару, а також функцію callback.
// Функція створює об'єкт товару, додає йому унікальний
// ідентифікатор у властивості id і викликає зворотний виклик
// передаючи йому створений об’єкт.
// showProduct(product) - callback приймає об'єкт
// продукта і виводить його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("shampoo", 33, showProduct);

// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// function makeShef (shefName){
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     }
// }
// const mango = makeShef("Mango");
// mango(`apple pie`);
// mango(`fish`);

// const polly = makeShef("Polly");
// polly(`cocke`);

// makeShef(`Alex`)(`meet`);

// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter

// function makeCounter() {
//   let counter = 2;

//   return {
//     increment: () => (counter += 3),

//     decrement: () => (counter -= 1),

//     getValue: () => counter,
//   };
// }

// const counter = makeCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// counter.decrement();
// counter.decrement();

// console.log(counter.getValue());

//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   };
// }

// const premium = saveDiscount(50);
// const season = saveDiscount(30);
// const current = saveDiscount(10);

// console.log(premium(1500));
// console.log(season(900));
// console.log(current(650));

//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//   return function (userPassword) {
//     return password === userPassword;
//   };
// }

// const checkPassword = savePassword("mypass");

// console.log(checkPassword);

// console.log(checkPassword("notmypass"));

// console.log(checkPassword("mypass"));

// / Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();

// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

// // Зробіть так, щоб код працював

// const user = {
//   name: "Jhon",
//   showName() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.showName.bind(user), 1000);

// // Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
//   console.log(number);
//   console.log(this.price);
// }

// const laptop = {
//   price: 1500,
// };

// showPrice.call(laptop, 1);
// showPrice.apply(laptop, [1]);

// Даний об'єкт counter. Напишіть до нього getter та setter
// const counter = {
//   _count: 3,
// };

// / Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }

//   set login(newValue) {
//     this.#login = newValue;
//   }
// }

// const user = new Client("melogin", "mymail@yahoo.com");

// console.log(user.login);
// user.login = "newLogin";

// console.log(user.login);

// Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {},

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {},

//   //Метод повертає поточний баланс
//   getBalance() {},

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає кількість засобів певного типу
//   //транзакції з історії транзакцій
//   getTransactionType(type) {},
// };

// // \\\\\\\\\\\\\\\\\\\
// // Напиши скрипт управління особистим кабінетом інтернет банку
// //Є об'єкт account у якому необхідно реалізувати
// //методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//       id: Date.now(),
//       date: new Date(),
//     };
//     },
//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {
//     const newOperation = this.createTransaction(Transaction.DEPOSIT, amount);
//     this.transactions.push(newOperation);
//     this.balance += amount;
//   },

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//     withdraw(amount) { },
//   /Метод повертає поточний баланс
//   getBalance() {},

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає кількість засобів певного типу
//   //транзакції з історії транзакцій
//   getTransactionType(type) {},
// };

// account.deposit(1000);
// console.log(account);

//Створіть об'єкт calculator із такими методами
//read() - зчитує через promp чило, оператор та наустпне число
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

const calculator = {
  read() {
    const input = prompt("Enter number, operator, number");
    const parsetInput = this.parseString(input);
    console.log(parsetInput);

    console.log(this.calculate(parsetInput));
  },
  sum(a, b) {
    return Number(a) + Number(b);
  },
  min() {},
  mult() {},
  div() {},
  parseString(originalString) {
    const [firstOperand, operator, secondOperand] = originalString
      .replaceAll(" ", "")
      .split(/(\D)/);

    return {
      firstOperand,
      secondOperand,
      operator,
    };
  },

  calculate(parsetInput) {
    const { firstOperand, operator, secondOperand } = parsetInput;
    switch (operator) {
      case "+":
        return this.sum(firstOperand, secondOperand);
    }
  },
};

calculator.read();
