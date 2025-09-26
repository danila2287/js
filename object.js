// Object можно использовать как const так и let
// Есть 2 формы записи 
let user ={};
let user2= new Object({});

// Объект содержит ключ: значение

let userName ={
    name: "Alex",
    age:30,
    "user-city": "Moscow"
};
// Сoздать новое поле
userName.company="aroken.ru";

// Удалить поле
delete userName.age;

console.log(userName)
// console.log(userName.age)
// console.log(userName["user-city"])