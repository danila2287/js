"use strict";
// ===Reduce and Sort===
// Reduce по факту то же самое, что и forEach только дополгительно
//  есть переменная в которой можно что-то хранить

const numbers = [1, 2, 10, 3, 4, 5, 6];
// аккумулятор это времення переменная которая хранит наши значения
const sumNum = numbers.reduce((sum, num) => {
  return sum + num;
}, 0); //означает, что sum=0 ,если
//  ничго не перадим то будет взят первый элемент массива.
console.log(sumNum);

const products = [
  { title: "Ноутбук", price: 80000, quantity: 10 },
  { title: "Смартфон", price: 60000, quantity: 11 },
  { title: "Наушники", price: 5000, quantity: 12 },
  { title: "Планшет", price: 50000, quantity: 13 },
];

const countOfProducts = products.reduce((acc, number) => {
  //Есть reduceRight считает справа налево
  return acc + number.quantity;
}, 0);

console.log(countOfProducts);

//Метод Sort сортирует по строкам 1 вариант и 2 по числам

const names = ["John", "Bob", "Alex", "Kevin"];

console.log(names.sort());
console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);

//coртировка по цене новый отсортировочный массив
const sorted = products.toSorted((a, b) => {
  return b.price - a.price;
});

console.log(sorted);
