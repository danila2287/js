"use strict";
// Изучаем элемент this

// function test(){
//   console.log(this)
// }
// test();

const user = {
  name: "Jhon",
  age: 19,
  greet() {
    console.log(`Hello! Iam ${this.name}`);
  },
  checkAge() {
    if (this.age > 18) {
      this.greet();
    }
  },
};

user.checkAge();
// this используют с объектами или классами
//this внутри метода объекта указывает на сам объект(удобно так как универсально,
// если мы допустим захотим скопировать объект,
//  изменится user,например, на admin и при this мы будем сссылаться уже на админ)
// this внтутри стредочной функции обращается к window;
