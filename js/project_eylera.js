// task1
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// const oneNumber = 3;
// const twoNumber = 5;
// const finalNumber = 1000;
// let totalNumber = 0;

// for (let i = 3; i < finalNumber; i += 1) {
//   if (i % oneNumber === 0 || i % twoNumber === 0) {
//     totalNumber += i;
//   }
// }
// console.log(totalNumber);

// task2
// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
// let summ = 0;

// for (let i = 0; i < 10; i += 1) {
//   let summFib = i + i;
//   console.log("🚀 ~ summFib", summFib);

//   if (summFib % 2 === 0) {
//     summ += i;
//     // console.log("🚀 ~ summ", summ);
//   }
// }

// task2
// Простые делители числа 13195 - это 5, 7, 13 и 29.

// Каков самый большой делитель числа 600851475143, являющийся простым числом?

// const startNumber = 13195;

// let didvidorNumberHigth = 0;

// let allNumber = 0;

// for (let i = 0; i < startNumber; i++) {
//   if (startNumber % i === 0) {
//     allNumber = i;
//     // console.log("🚀 ~ allNumber", allNumber);
//     if (startNumber % allNumber === 0) allNumber = allNumber;
//     console.log("🚀 ~ allNumber", allNumber);
//   }
// }
// const a = 10;

// let simpleNumber = 0;

// for (let i = 1; i <= a; i += 1) {
//   if (i < 5) {
//     // console.log(i);
//   } else {
//     console.log(i);
//   }
// }

// const a = 10;

// let simpleNumber = 0;

// const nextPrime: for (let i = 2; i <= a; i += 1) {
//   for (let j = 2; j < i; j += 1) {
//       if (i % j == 0) {
//         console.log(nextPrime);
//       continue nextPrime;
//     }
//   }
// }

// const n = 10;

// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       break;
//     } else {
//       console.log(i);
//       break;
//     }
//   }
// }

// const n = 30;
// for (let i = 1; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j < i) {
//       break;
//     } else if (j === i) {
//       console.log(i);
//     }
//   }
// }
