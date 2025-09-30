"use strict";

const numbers = [1, 2, 3, 4, 5, 6];

//метод добавления элемента в конец массива
// numbers.push(10);
numbers.push(10);
console.log(numbers);

// метод удаления из массива последнего элемента
numbers.pop();
console.log(numbers);

//выдяеляем последний элемент
const lastNumber = numbers.pop();
console.log(lastNumber);

// удаление и веделение 1 элемента массива;

numbers.shift();
console.log(numbers);

// const shiftNumber = numbers.shift();
// console.log(shiftNumber);

// Добавление в массив 1 элемент
numbers.unshift(16);
console.log(`добавление 1 элемента в массив ${numbers}`);

// Получение элемента по индексу
console.log(numbers.at(-1));

// реверс массива

// numbers.reverse()
// но чтобы сделать реверс
// массива и при этом не изменять оригинал используют toReverse
// console.log(numbers)
const reverseNumber = numbers.toReversed();
console.log(reverseNumber);
//=============
const cart = [
  { productName: "Laptop", price: 30000 },
  { productName: "Tab", price: 15000 },
];
console.log(cart);

cart.push({ productName: "phon", price: 80000 });

//==============================
let sum = 0;

// Метод обхода массива for
numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});

// numbers.forEach((number) => {
//   sum += number;
// });
// console.log(sum);

// numbers.forEach(function (number) {
//   sum+=number;
// });
// console.log(sum)

function forEach(array, callbackFunc) {
  for (let i = 0; i < array.length; i++) {
    callbackFunc(array[i], i, array);
  }
}
forEach(numbers, function (number) {
  sum += number;
});
console.log(sum);
