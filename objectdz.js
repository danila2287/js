// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

//Задача 1
const person = {
  name: "Danila",
  age: 21,
  hobby: "hockey",
};
console.log(person);

// Задача 2
const isEmpty = (objectPerson) => {
  for (let key in objectPerson) {
    return false;
  }
  return true;
};

console.log(isEmpty(person));

// Задача 3
const task = {
  title: "Математика",
  description: "Пределы и производные",
  isCompleted: "Домашняя работа",
};
const task2 = {
  isCompleted: "Контрольная работа",
  day:25
};

function cloneAndModify(object , modifications) {

  const result={...object,...modifications}
  for (key in result) {
    console.log(result[key]);
  }
}

cloneAndModify(task, task2);

// Задача 4
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(myMethodObject){
  for(let key in myMethodObject){
    if(typeof myMethodObject[key] === "function"){
      myMethodObject[key]();
    }
  }
}
callAllMethods(myObject);

