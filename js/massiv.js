// function getExtremeElements(array) {
//     console.log(array);

//     let mas = [];
//     mas.push(array[0], array[array.length - 1]);

//     console.log(mas);

// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);



// function splitMessage(message, delimiter) {
//   let words;
//     words = message.split(delimiter);
//   console.log (words);
// }

// splitMessage("Mango hurries to the train", " ")



// function calculateEngravingPrice(message, pricePerWord) {

//     console.log((message.split(' ').length) * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);


// let letter = "JavaScript is in my blood";

// letter = letter.split(' ').length;
// console.log(letter);

// const total = letter * 10;
// console.log(total);



// function slugify(title) {

//    title = title.toLowerCase().split(" ").join('-');

// console.log(title);

// }

// slugify("Arrays for begginers");




// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);



// function makeArray(firstArray, secondArray, maxLength) {
//     const ollArray = firstArray.concat(secondArray);
//     console.log(ollArray);
    
//     if (ollArray.length > maxLength) {
//         console.log(ollArray.splice(((ollArray.length-1) - maxLength), ollArray.length-1));
//     } else {
//         console.log(ollArray);
//     }
// }

// function makeArray(firstArray, secondArray, maxLength) {
//     const ollArray = firstArray.concat(secondArray);
    
//     if (ollArray.length > maxLength) {
//         console.log(ollArray.splice(0, maxLength));
//     } else {
//         console.log(ollArray);
//     }
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);




// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i <= number; i += 1) {
//         total += i;
        
//         // console.log(i);
//     } 
//     console.log(total);
// }

// calculateTotal(1);





// function calculateTotalPrice(order) {
//     let total = 0;


//   for (let i = 0; i < order.length; i+=1) {
//       total += order[i];
//       console.log(i);
//   }

 
//     console.log(total);
// }
    // console.table(имя масива)ж
// calculateTotalPrice([12, 85, 37, 4]);




// function findLongestWord(string) {
//     let word = string.split(' ');
//     let bigLeng = word[0];
//     for (let i = 0; i < word.length; i += 1) {

//         if (bigLeng.length < word[i].length) {
//             bigLeng = word[i];
//         }
        
//         console.log(word[i].length); 
//     }
//     console.log(bigLeng);
// }


// function findLongestWord(string) {
//     let word = string.split(' ');
//     let bigLeng = word[0];
   
//     for (let value of word) {
//         if (bigLeng.length < value.length) {
//             bigLeng = value;
//         }
//     }
//     console.log(bigLeng);
// }


// findLongestWord("The quick brown fox jumped over the lazy dog");





// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//     for (let i = min; i <= max; i += 1) {
//         console.log(i);

//         numbers.push(i);
//     }

    

//     console.log(numbers);
    

// }

// createArrayOfNumbers(1, 3);
    
// перебрать все цифрі от мін до макс




// function filterArray(numbers, value) {
//     const newMass = [];
//     for (const number of numbers) {
        
//         if (number > value) {
//             // console.log(number);
//             newMass.push(number);
            
//         } 
        
//     }
//    console.log(newMass);
// }



// function filterArray(numbers, value) {
//     // let newMas = [];

//     for (let i = 0; i <= numbers.length; i += 1) {
//         // console.log(numbers[i]);

//         if (numbers[i] > value) {
//             // newMas = numbers[i];
//             console.log(numbers[i]);
//         }
//         // console.log(newMas);
//     }
    
// }

// filterArray([12, 24, 8, 41, 76], 20);

// filterArray([1, 2, 3, 4, 5], 3);

// filterArray([1, 2, 3, 4, 5], 4);

// filterArray([1, 2, 3, 4, 5], 5);



// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log (fruits.includes(fruit)); // Change this line
// }

// checkFruit("plum");





// function getCommonElements(array1, array2) {
//     let totalElement = [];

//     for (const element1 of array1) {
//         console.log(element1);
//     }

//     for (const element2 of array2) {
//         console.log(element2);
//     }
//     // totalElement = element1 === element2;

//     console.log(totalElement);

// }

// function getCommonElements(array1, array2) {
//     let cop = [];

//    for (const element of array1) {
//        if (array2.includes(element)) {
//            cop.push(element);
//        }
//    }
//     console.log(cop);
// }


// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19])




// function getEvenNumbers(start, end) {
//     let res = [];
//     for (let i = start; i <= end; i += 1) {
//         // console.log([i])

//         if (i % 2 === 0) {
//             res.push(i);

//             console.log (res);
//         }

//     }
// }

// getEvenNumbers(2, 5);




function includes(array, value) {

    for (const element of array) {
        console.log(element);

        if (element === value) {
            console.log(true);
            break;
        } 
            
        console.log(false);
    }
}



// function includes(array, value) {

//     for (const element of array) {
//         console.log(element);

//         switch (element) {
//             case value:
//                 console.log(true);
//                 break;
//         }
//         default:
//         console.log(false);
//     }
// }
includes([1, 2, 3, 4, 5], 3);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");