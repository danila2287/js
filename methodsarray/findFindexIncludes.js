"use strict";
// Find, FindIndex, Includes поиск элементов в массиве
// А также Some и Every (ищет элементы и возвращает true || false)
const numbers = [1, 2, 3, 4, 5, 6];
//Метод find! ищет в массиве нужный элемент
const number = numbers.find((num) => {
  return num > 3;
});
console.log(number);

const products = [
  { title: "Ноутбук", price: 80000, quantity: 10 },
  { title: "Смартфон", price: 60000, quantity: 11 },
  { title: "Наушники", price: 5000, quantity: 12 },
  { title: "Планшет", price: 50000, quantity: 13 },
];

const laptop = products.find((num) => {
  return num.title == "Ноутбук";
});
console.log(laptop); //vivedet eto
// {title: 'Ноутбук', price: 80000, quantity: 10}

//!Метод findIndex! ищет индекс элемента нужного
const newNumbers = [23, 43, 23, 54, 432, 453252435, 654454536];

const numIndex = newNumbers.findIndex((numb) => {
  return numb == 432;
});

// const numIndex = newNumbers.indexOf(54, 2);
//находим элемент который
//  мы ищем и с какого по индексу
//  элемента мы хоти начать

console.log(numIndex);

// Метод Includes!
//  проверяет наличие элемента и находит
// элемент который
//  мы ищем и с какого по индексу
//  элемента мы хоти начать
//  в массиве а также

console.log(numbers.includes(12));
// ====Some and Every можно использовать для объектов
// ================================Some проверяет есть ли элемент и выводит true or false
console.log(
  products.some((obj) => {
    return obj.title === "Планшет";
  })
);

// ==========================Every проверяет каждый элемент и он должен
//  соответстовать условию
console.log(
  products.every((obj) => {
    return obj.quantity >3;// каждый элемент коантити должен быть больше 3 иначе false;
  })
);