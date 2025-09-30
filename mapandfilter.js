"use strict";
// методов map и filter
//  преобразовывать и фильтровать элементы массива
const numbers = [1, 2, 3, 4, 5, 6];

// method map
// позволяет изменить массив, например, увеличить на 2

const newNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(newNumbers);

let users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
];

users = users.map((user) => {
  //   return [user.name, user.age*2];
//   user.isAdmin = true;
  return user;
});

console.log(users);

// filter чтобы отсеивать ненужное

const number = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = number.filter((num) => {
  //   if (num % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return num % 2 == 0;
});

console.log(evenNumbers);

const admins = users.filter((user) => {
//   if (user.isAdmin == true) {
//     return true;
//   } else {
//     return false;
//   }
return user.isAdmin ===true;
});

console.log(admins)