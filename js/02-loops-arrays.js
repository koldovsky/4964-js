// let counter = 42;
// while (counter <= 5) {
//  console.log(counter);
//  counter++;
// }

// let counter = 42;
// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 5);

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Ключові слова break, continue
// break - перериває цикл
// continue - починає нову ітерацію
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
//     if (i === 7) {
//         break;
//     }
// }
// Якщо код можна зробити без break і continue, то краще без них

// let count = 1
// while ((((count % 2) === 0) && (count != 7) )) {
//     console.log(count);
//     // count++;
// }

// for (let i = 1; i <= 7; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Масиви - Arrays
const cars = ["Jeep Wrangler", "BMW X5", "MB GLE", "Porsche Taycan"];
cars.push("Ford F150");
// console.log(cars);

cars[1] = "BMW X7";

// for (let i = 0; i < cars.length; i++) {
//     console.log(i, cars[i]);
// }

// for (const car of cars.slice(1, 3)) {
//     console.log(car);
// }

// for (const letter of 'Hello World!') {
//     console.log(letter);
// }

// Поглиблена частина
// cars.sort();
// console.log(cars);

const nums = [42, 4, 422, 14, 100];
nums.sort( (a, b) =>  a - b );
console.log(nums);

// reverse()
// pop()
// unshift() / shift()
// map()
// filter()
// reduce()
// slice()