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
  

function includes(array, value) {
  // Change code below this line
  for (let i of array) {
    if (i === value) {
      return true;
    }
  }
    return false;
  // Change code above this line
}
includes([1, 2, 3, 4, 5], 3)
