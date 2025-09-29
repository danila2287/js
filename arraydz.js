"use strict";

// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// Задание 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

console.log(users);

// Задание 2

let medAge = 0;
users.forEach(function getUserAverageAge(number) {
  medAge += number.age;
});
medAge = medAge / users.length;
console.log(medAge);

// Задание 3

const arrayAdmins = [];
users.forEach(function getAllAdmins(admin) {
  if (admin.isAdmin == true) {
    return arrayAdmins.push(admin);
  }
});

console.log(arrayAdmins);

// Задание 4

const array = [27, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
const result = [];

function first(arr, n) {
  if (n == 0) {
    return result;
  } else if (n == undefined) {
    return [arr, arr.at(0)]; // возвращает массив с первым элементом
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i <= n - 1) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
console.log(first(array, 6));
