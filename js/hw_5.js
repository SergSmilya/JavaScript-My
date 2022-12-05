// task 2/20

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     (this.balance -= cost - cost * this.discount), this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// task3/20

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// task7/20

// class Cars {
//     constructor()
// }

// task10/20

// class Storage {
//   constructor(items = {}) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     // return this.items.filter((item) => item !== itemToRemove);
//     return this.items.forEach((item) => {
//       //   console.log(item);
//       if (item === itemToRemove) {
//         this.items.splice(this.items.indexOf(item), 1);
//         // console.log(item);
//       }
//     });
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(Storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// console.log(storage.removeItem("Prolonger"));
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// task 11/20

class StringBuilder {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }
  //   getValue() {
  //     return (this.value = `${this.value}`);
  //   }
  //   padEnd(str) {
  //     return (this.value = `${this.value}${str}`);
  //   }
  //   padStart(str) {
  //     return (this.value = `${str}${this.value}`);
  //   }
  //   padBoth(str) {
  //     return (this.value = `${str}${this.value}${str}`);
  //   }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder);
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
