"use strict";

//Slice Splice и строки;
const numbers = [10, 24, 16, 50, 12, 5];

//Slise создает новый массив, указывая элементы которые должны попасть в этот массив

const newNumbers = numbers.slice(1,4);
console.log(newNumbers);



//Splise мутирует массив, позволяет его обрезать и добавлять элеммементы

// numbers.splice(0,2,100,200); //удалит с 0 индекс по 2 индекс не вкл и добавит вместо него 100 и 200
// console.log(numbers)

//метод join 

console.log(numbers.join("x")) //может всавить элементы или пробелы в массив
const person=["Alex","Bob","Lina","Anna"];
const personStr = person.join()
console.log(personStr.split(","));// разбивает строку на массивы

console.log(person.join().toLocaleLowerCase().split(","))