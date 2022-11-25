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
