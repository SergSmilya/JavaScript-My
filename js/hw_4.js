// task 4/48

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName) {
//         if (pizzaPalace.pizzas.includes(pizzaName)) {
//             return makePizza(pizzaName);
//           } else {
//             return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//           }
//     },

//   };
//   // Change code above this line

//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   // Method calls with callbacks
//   console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// task 14/48

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(element => element.length);
// console.log(planetsLengths)

// task 15/48

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const titles = books.map(book=>book.title);

// console.log(titles);

// task 16/48

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line

//   const genres = books.flatMap(book=>book.genres);
//   console.log(genres)

// task 19/48

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number=> number%2===0);
// const oddNumbers = numbers.filter(number=> number%2!==0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// task 20/48

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((allGenr, index, allGenres) => allGenres.indexOf(allGenr)===index );

//   console.log(uniqueGenres);

// task 22/48

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

//   const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor===color);

//    };

//    console.log(getUsersWithEyeColor(users, "blue"));

// task 24/48

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => {
//         user.friends
//     console.log(user.friends.includes(friendName))} )

//  };

//  getUsersWithFriend(users, "Briana Decker");

// task 25/48

// const getFriends = (users) => {
//     // const friends = users.flatMap(user => user.friends);
//     // console.log(friends);

//     console.log (users.flatMap(user => user.friends).filter((friend, index, friends) => friends.indexOf(friend)===index))
//  };

//  getFriends(users);

// task 34/48

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, totalPlayTime) => totalPlayTime + acc, 0 );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime)

// task 35/48

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, {playtime, gamesPlayed}) => {

//   return (playtime / gamesPlayed) + acc}, 0);

// console.log(totalAveragePlaytimePerGame);

// !!! task 37/48

// const getTotalFriendCount = users => {
//    return (users.reduce((acc, user) => [...acc, ...user.friends], [])).length
// };
// console.log(getTotalFriendCount(users))

// task 38/48

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(alphabeticalAuthors)

// task 43/48 (задавав питання як вирішити)

// const sortByDescendingFriendCount = users => {

// //   // const arrEach = users.forEach(element =>
// //   //   console.log([...element.friends].sort())
// //   //   );

// //   // return [...users].map(element => element.friends).sort()
// return [...users].sort((a, b) => b.friends.length - a.friends.length)

// //    return ([...users].flatMap(user=> user.friends)).length
// //    return [...users].flatMap(user=> user.friends).sort((a, b) => b.localeCompare(a))

// };

// console.log(sortByDescendingFriendCount(users));

// task 45/48

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(element=> element.rating>MIN_BOOK_RATING).sort((a, b) => a.author.localeCompare(b.author)).map(element=>element.author);

// console.log(names);

// task 47/48 (звертався з питанням, але дійшов сам)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((element) => element.friends)
//     .filter((element, index) => element[index])
//     .sort((a, b) => a.localeCompare(b));
// };

// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((element) => element.friends)
//     .filter(
//       (element, index) => element.indexOf(element[index]) !== element[index]
//     )
//     .sort((a, b) => a.localeCompare(b));
// };

// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((element) => element.friends)
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.log(
//   "🚀 ~ file: hw_4.js ~ line 411 ~ getSortedFriends ~ getSortedFriends",
//   getSortedFriends(users)
// );

// const arr = [
//   "Goldie Gentry",
//   "Briana Decker",
//   "Jordan Sampson",
//   "Eddie Strong",
//   "Adrian Cross",
//   "Jordan Sampson",
//   "Eddie Strong",
// ];

// const test = arr.filter((element, index, arr) => {
//   console.log(arr.indexOf(element) === index);
// });
// console.log("🚀 ~ file: hw_4.js ~ line 428 ~ test", test);

// console.log("🚀 ~ file: hw_4.js ~ line 418 ~ new", arr);
