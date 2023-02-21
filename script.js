// var polaznici = [
//   {
//     name: "Igor",
//     surname: "Boroja",
//     age: 18,
//   },
//   {
//     name: "Ivan",
//     surname: "Munitić",
//     age: 13,
//   },
//   {
//     name: "Aleks",
//     surname: "Ivanac",
//     age: 24,
//   },
//   {
//     name: "Danijel",
//     surname: "Hrgić",
//     age: 67,
//   },
//   {
//     name: "Darko",
//     surname: "Šušnjar",
//     age: 12,
//   },
//   {
//     name: "Luka",
//     surname: "Modrić",
//   },
// ];

// function checkAge(age, name, surname) {
//   var ageResponse = "";
//   var fullName = name + " " + surname;

//   switch (true) {
//     case age < 18:
//       ageResponse = fullName + " je maloljetnik/maloljetnica";
//       break;
//     case age >= 18 && age < 67:
//       ageResponse = fullName + " je punoljetnik/punoljetnica";
//       break;
//     case age >= 67:
//       ageResponse = fullName + " je umirovljenik/umirovljenica";
//       break;
//     default:
//       ageResponse = fullName + " se još nije rodio/rodila";
//       break;
//   }

//   return ageResponse;
// }

// polaznici.forEach((polaznik) => {
//   console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname));
// });

// printLines();

// function printLines() {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line";
//   console.log(secondLine);
// }

// What will be the result of first console.log() and why?
// undefined, because all variables inside the function are hoisted/lifted. Because secondLine variable is called before its declared, its value will be undefined and no error will be thrown.

// What will be the result of the seocnd console.log() and why?
// I'm your first line! - everything is correct, variable is called after its declared.

// What will be result of the third console.log() and why?
// I'm your second line! - everything is correct, variable is called after its declared.

// What will happen if we invoke function printLines() before its declared and why this happens?
// Everything will work like when we invoked printLines() function after the declaration, because function declarations are hoisted/lifted on the same way like the variables.

// printLines();

// var printLines = function () {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line";
//   console.log(secondLine);
// };

// console.log(printLines());

// What will happen when function expression is called before the function declaration and why?

// const printLines = function () {
//   console.log(secondLine);

//   let firstLine = "I'm your first line!";
//   console.log(firstLine);

//   let secondLine = "I'm your second line";
//   console.log(secondLine);
// };

// printLines();

// const madeOfGlass = function () {
// const thing = "window";
// thing = "glass";

// console.log(thing);

//   const firstArray = ["a", "b", "c"];
//   const secondArray = ["d", "e", "f"];
//   firstArray.push(...secondArray);

//   console.log(firstArray);
// };

// madeOfGlass();

// Object destructuring
// const dog = {
//   breed: "Golden retriver",
//   age: 12,
// };
// const { breed, age } = dog;
// console.log(breed);
// console.log(age);

// Array destructuring
// const firstArray = ["a", "b", "c"];

// const [q, y, z] = firstArray;

// console.log(q);
// console.log(y);
// console.log(z);

// Complex object destructuring
// const car = {
//   name: "Ferrari",
//   country: "IT",
//   dimensions: {
//     width: 550,
//     height: 120,
//   },
// };

// const {
//   name,
//   country,
//   dimensions: { width, height },
// } = car;

// console.log(name);
// console.log(country);
// console.log(width);
// console.log(height);

// const povrsina = width * height;

// const firstArray = ["one", "two", "three"];
// const secondArray = ["four", "five", "two"];
// const x = [1, 2];
// const y = [3, 4, 5, 2];

// const arrayMachine = function (first, second) {
//   let finalArray = first.concat(second);
//   finalArray = [...new Set(finalArray)];
//   console.log(finalArray);

//   finalArray.sort();
//   console.log(finalArray);

//   finalArray.reverse();
//   console.log(finalArray);
// };

// arrayMachine(firstArray, secondArray);
// arrayMachine(x, y);

// const dog = {
//   pasmina: "Doga",
//   tezina: 57,
// };

// const human = {
//   name: "Borna",
//   age: 23,
//   ...dog,
// };

// console.log(human);

// function sendEmail() {
//   const alertMessageEl = document.querySelector(".alert-message");

//   alertMessageEl.style.display = "block";

//   setTimeout(() => {
//     alertMessageEl.style.display = "none";
//   }, 2000);
// }

// const descriptionEl = document.querySelector(".description");
// const footerEl = document.querySelector("#footer");
// const ulEl = document.querySelector("ul");

// const h1 = document.createElement("h1");
// h1.innerText = "Zbilja smo jako smo pametni!";
// descriptionEl.parentNode.prepend(h1);

// const infoDiv = document.createElement("div");
// infoDiv.classList.add("info");
// footerEl.parentNode.insertBefore(infoDiv, footerEl);

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   ulEl.appendChild(li);
// }

// console.log(ulEl.dataset);

// const processOrder = function(name, meal, estimation, callback){
//   const status = `${name}`;

// }

// function zbroj(x, y, callback) {
//   const z = x + y;

//   callback(z);
// }

// zbroj(1, 5, function (z) {
//   if (z < 10) {
//     console.log("Zbroj je manji od 10");
//   } else {
//     console.log("Zbroj je veći od 10");
//   }
// });

// zbroj(1, 5, function (z) {
//   if (z % 2) {
//     console.log("Zbroj je neparan");
//   } else {
//     console.log("Zbroj je paran");
//   }
// });

// zbroj(1, 5, function (z) {
//   const nekiNoviZbroj = z + 1000000;
//   console.log(nekiNoviZbroj);
// });

/**
 * Process order function.
 *
 * @param {string} name - Ovo je ime osobe koja je naručila order.
 * @param {string} meal - Ovo je naziv jela koje je osoba naručila.
 * @param {number} estimation - Ovo je vrijeme pripreme narudžbe.
 */
// const proscessOrder = function (name, meal, estimation, callback) {
//   const status = `${name}'s ${meal} is preparing`;
//   callback(status);

//   setTimeout(function () {
//     const status = `${name}'s ${meal} is prepared`;
//     callback(status);
//   }, estimation);
// };

// console.log("Matilda order...");
// proscessOrder("Matilda", "cheesburger", 2000, function (status) {
//   console.log(status);
// });

// console.log("Josebh order...");
// proscessOrder("Joseph", "fruit salad", 3000, function (status) {
//   console.log(status);
// });

// console.log("Tina order...");
// proscessOrder("Tina", "water", 1000, function (status) {
//   console.log(status);
// });

// const buildSomething = function (housePart, estimate, callback) {
//   console.log(housePart + "build started...");
//   setTimeout(function () {
//     if (true) {
//       callback(housePart, "ready");
//     } else {
//       callback(housePart, "not ready");
//     }
//   }, estimate);
// };

// buildSomething("Foundations", 1000, function (housePart, status) {
//   let houseParts = housePart;
//   console.log(`${houseParts} are ${status}`);

//   if (status === "ready") {
//     buildSomething("Walls", 2000, function (housePart, status) {
//       houseParts += `, ${housePart}`;
//       console.log(`${houseParts} are ${status}`);

//       if (status === "ready") {
//         buildSomething("Roof", 3000, function (housePart, status) {
//           houseParts += `, ${housePart}`;
//           console.log(`${houseParts} are ${status}`);
//           console.log("House is built!");
//         });
//       }
//     });
//   }
// });

const buildSomething = function (housePart, estimate) {
  console.log(housePart + " building started...");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (true) {
        resolve("ready");
      } else {
        reject("Unexpected error found, building can not be continued!");
      }
    }, estimate);
  });
};

buildSomething("Foundations", 1000)
  .then((status) => {
    console.log(`Foundations are ${status}`);
    return buildSomething("Walls", 1000);
  })
  .then((status) => {
    console.log(`Walls are ${status}`);
    return buildSomething("Roof", 2000);
  })
  .then((status) => {
    console.log(`Roof is ${status}`);
    return buildSomething("House is built!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(
      "bez obzira da li se je desio reject ili resolve, ja ću se uvijek pokrenuti"
    );
  });
