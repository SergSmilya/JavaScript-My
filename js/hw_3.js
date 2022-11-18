// task 4/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.pop();
// console.log(lastTag) 
// // Change code above this line

// task 6/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price=5000;
// apartment.rating=4.7;
// apartment.owner.name="Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.tags)

// task 8/41

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
   
// };
// console.log(product)

// task 9/41

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam"

//   // Change code above this line
// };
// console.log(credentials)


// // task 10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {

//   keys.push(key);
//   values.push(apartment[key]);

// };

// console.log(keys);
// console.log(values);


// task 11 / 41


// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
//   };
  

//   // Change code above this line
// };

// console.log(keys);
// console.log(values);

// task 11 / 41

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);
//   console.log(keys.length);
 
//   propCount = keys.length;
//   // // Change code above this line
//   return propCount;
//   console.log(propCount);
// };


// countProps({ name: "Mango", age: 2 });


// task 13 / 41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// };
// console.log(values)


// task 16 / 41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const i of values) {
//     // console.log(i);
//     totalSalary += i;
//     console.log(totalSalary);
//   }
//   // Дуже важливо писати консоль лог перед ретерн!!!
//   console.log(totalSalary); 
//   return totalSalary;

// };

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// Object.keys()
// Object.values()


// task 17 / 41

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// console.table(colors);

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   console.log(color.rgb);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };

// console.log(hexColors); 
// console.log(rgbColors); 
 
// task 17 / 41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {

//     if ((product.name).includes(productName)) {
//       console.log(product.price);
//       // return product.price;
//     };

//   };
//   return null;
// };
// getProductPrice("Grip");
// getProductPrice();


// task 19 / 41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.table(products)

// function getAllPropValues(propName) {
//   const enter = [];

// for (const product of products) {
//   // console.log(product);
//   // const enterName = Object.keys(product);
//   // console.log(enterName);
  

//   if (product.hasOwnProperty(propName)) {
//     enter.push(product[propName]);
//   };
// };

//   console.log(enter);
//   return enter;
// };

// getAllPropValues("price");


// task 20 / 41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrice = 0;

//     for (const product of products) {
//         console.log(product.name);
//         if (product.name === productName) {
//             // totalPrice = `${product.name}, ${product.price * product.quantity}`;
//             totalPrice = product.price * product.quantity;

//         };

// };   

//     console.log(totalPrice);
// };

// // calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");

// task 25 / 41
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {today:{high:highToday, low:lowToday, icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, 
// tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;


// task 25 / 41
