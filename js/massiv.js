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

// calculateTotalPrice([12, 85, 37, 4]);




function findLongestWord(string) {
    let word = string.split(' ');

    for (let wor of word) {

        wor = wor.length[0] < wor.length[1];


        
       console.log(wor); 
    }

 
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");