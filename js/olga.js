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

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for(let i = 0; i < order.length; i+=1){
  total+=order[i];
}
  // Change code above this line
  console.log(total) ;
}
calculateTotalPrice([12, 85, 37, 4])