"use strict";

const user = {
  name: "John",
  age: 20,
};
// можно создавать глубоую копию объекта;
user.name="Bob";
const newUser=JSON.parse(jsonUser);//возвращает объект;
console.log(newUser);


// localStorage.setItem("theme","dark")

// const userTheme=localStorage.getItem("theme");
// console.log(userTheme)
const jsonUser = JSON.stringify(user); //преобразования объекта к строке с помощью json
localStorage.setItem("user",jsonUser)

user=JSON.parce(localStorage.getItem("user"));
console.log(user);