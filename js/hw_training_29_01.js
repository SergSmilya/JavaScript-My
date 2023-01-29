console.log("hello");

// / Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо

// const cube = document.querySelector(".cube");
// let step = 10;

// document.addEventListener("keydown", (e) => {
//   console.log(e);

//   let left = parseInt(cube.style.left);
//   let top = parseInt(cube.style.top);

//   if (e.code === "ArrowRight") {
//     if (left >= window.innerWidth) return;
//     cube.style.left = `${left + step}px`;
//   } else if (e.code === "ArrowLeft") {
//     if (left <= 0) return;
//     cube.style.left = `${left - step}px`;
//   } else if (e.code === "ArrowUp") {
//     if (top <= 0) return;
//     cube.style.top = `${top - step}px`;
//   } else if (e.code === "ArrowDown") {
//     if (top >= window.innerHeight) return;
//     cube.style.top = `${top + step}px`;
//   }

//   console.log(window);
// });

// ! ***********************************

{
  /* <style>
  table {
  margin: 0 auto;
  border-collapse: collapse;
}

  td {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style> */
}

// <body>
// <div class="board">
//   <table>
//     <tbody>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td class="active"></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     </tbody>
//   </table>
// </div>

// Делегування подій
// * 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// * 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// * 3. Після перезавантаження сторінки активна комірка зберігається

// const div = document.querySelector(".board");
// const active = document.querySelector(".active");

// div.addEventListener("click", onCangeColor);
// active.addEventListener("click", (e) => {
//   e.stopPropagation();
//   e.target.style.backgroundColor = "red";

//   console.log(e.target);
// });

// function onCangeColor(e) {
//   console.dir(e.target.tagName);
//   const td = e.target;

//   if (td.tagName === "TD") {
//     const chekedTd = div.querySelector(".cheked");

//     if (chekedTd) {
//       if (td.style.backgroundColor === "green") {
//         td.style.backgroundColor = "white";
//         return;
//       }
//       chekedTd.style.backgroundColor = "white";
//       chekedTd.classList.remove("cheked");
//     }

//     td.style.backgroundColor = "green";
//     td.classList.add("cheked");
//   }
// }

// ! ***********************************
