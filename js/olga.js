// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   // const word1 = "sale";
//   // const word2 = "spam";
//     result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");

//   // Change code above this line
//     console.log(result);
//     console.log(message.toLowerCase())
// }
// checkForSpam("[SPAM] How to earn sale fast money?")
// checkForSpam("Trust me, this is not a spam message")

// function getExtremeElements(array) {
//   // Change code below this line
//   const arr = [];

//   console.log(arr.push(array[0], array[array.length - 1]));
//   console.log(arr)


//   // Change code above this line
// }
// getExtremeElements(["Earth", "Mars", "Venus"]);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const words = message.split(" ").length;
//   console.log(words);

//  const calculate = words * pricePerWord;
//   // return calculate;
//   console.log(calculate);

//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// function slugify(title) {
//   // Change code below this line
// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug) ;

//   // Change code above this line
// }
// slugify("Arrays for begginers");

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for(let i = 1; i <= number; i +=1) {
  
//   total +=i;
// console.log(total) ;
// }
  
//   // Change code above this line
// }
// calculateTotal(3);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let i = 0; i < order.length; i+=1){
//   total+=order[i];
// }
//   // Change code above this line
//   console.log(total) ;
// }
// calculateTotalPrice([12, 85, 37, 4])


// function findLongestWord(string) {
//   const array = string.split(" ");
//   console.log(array);

//   let biggestWord = array[0];

//   for (let word of array) {
//     console.log(array[word]);
//     if (biggestWord.length < word.length)
//     {
//       biggestWord = word;
//     }
//   }
//   console.log(biggestWord);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1){
//     console.log(i);
//     numbers.push(i);
    
//   }
  
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
  
// }
// createArrayOfNumbers(1, 3);


// function filterArray(numbers, value) {
//    // Change code below this line
//   const array = [];
//   for (let number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }
//   console.log(array);
//   return array;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 2)


// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];
//   for (let element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }
//   console.log(commonElements);
//   return commonElements;

//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4])


// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   console.log(evenNumbers);
//   return evenNumbers;

//     // Change code above this line
// }
// getEvenNumbers(2, 5)
  

// function includes(array, value) {
//   // Change code below this line
//   for (let i of array) {
//     if (i === value) {
//       return true;
//     }
//   }
//     return false;
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3)


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country : "Jamaica",
// city: "Kingston",}
// console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for ( let key of keys){
//   values.push(apartment[key]);
//   console.log(values);
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   propCount = keys.length;
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
  
//   const keys = Object.values(salaries);
//   for( let key of keys){
//     totalSalary += key;
//   }


//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for( let color of colors){
//   console.log(color);
//   console.log(color.hex);
//   console.log(color.rgb);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


// Напиши функцію getProductPrice(productName), яка 
// приймає один параметр productName - назва продукту.
//  Функція шукає об'єкт продукту з таким ім'ям
//   (властивість name) в масиві products і повертає 
//   його ціну (властивість price). Якщо продукт з 
//   такою назвою не знайдений, функція повинна 
//   повертати null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for(let product of products){
//   if(productName=== product.name){
//     console.log(product.price);
//     return product.price;
//   }
// }
// return null;
//   // Change code above this line
// }
// getProductPrice("Radar");


// Напиши функцію getAllPropValues(propName), 
// яка приймає один параметр propName - ім'я 
// (ключ) властивості. Функція повинна повернути 
// масив всіх значень властивості з таким ім'ям з 
// кожного об'єкта в масиві products. Якщо в об'єктах 
// відсутні властивості з таким ім'ям, функція 
// повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];



// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice;
//   for(let product of products){
//     const keys = Object.keys(product);
//     for( let key of keys){
//       if(productName===product[key]){
//         totalPrice = product.price * product.quantity;
//       }
//     }
//   }
// return totalPrice;

//   // Change code above this line
// }


// function getAllPropValues(propName) {
//   // Change code below this line
//   const array=[];
//   for( let product of products){
//     const keys = Object.keys(product);
//     for( let key of keys){
//       if(propName===key){
//         array.push(product[key]);
        
//       }
      
//     }
    
//   }
//   return array;

//   // Change code above this line
// }
// // console.log(getAllPropValues("price"));
// console.log(calculateTotalPrice("Radar"));


// Напиши функцію makeTask(data) яка приймає один параметр data - 
// об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, 
// не змінюючи напряму параметр data. У новому об'єкті повинна 
// бути властивість completed, значення якої зберігається в 
// однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші 
// дві, category і priority, можуть бути відсутніми. Тоді, в новому 
// об'єкті завдання, у властивостях category і priority повинні бути 
// значення за замовчуванням, що зберігаються в однойменних локальних змінних.


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = {category, priority, ...data, completed, };
//   return newData;
//   // Change code above this line
// }
// console.log(makeTask({category: "Homemade", priority: "Low", text: "Take out the trash"}));


// // Change code below this line
// function add(...args) {
//   let total = 0;
//   console.log(...args);
//   for(let arg of args){
//     total += arg;
//   }
//   console.log(total);
// return total;
//   // Change code above this line
// }
// add(15, 27, 45, 1);


// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg>firstNumber){
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));


// function findMatches(firstArray, ...args) {
//   const matches = []; // Don't change this line
// console.log(firstArray);
// console.log(...args);
// for(let arg of args){
//   if(firstArray.includes(arg)){
//     matches.push(arg);
//   }
// }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books.indexOf(oldName));
//     this.books.splice(1, 1, newName);
//     return this.books;


//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   // Change code below this line
//  potions: ["Speed potion", "Dragon breath", "Stone skin"],
//  getPotions(){
// return this.potions;
//  }

//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// for( let potion of potions){
//   if (potionName===potion){
//     this.potions.remove(this.potions.indexOf(potionName), 1);
//   }
// }


//     // Change code above this line
//   },
// };

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    console.log(this.potions)
    return this.potions.name;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
