"use stict";
// Массивы
const numbers = [
  "test",
  9,
  true,
  { name: "alex", age: 20 },
  function () {
    console.log("Hello!");
  },
];

// numbers[0] = 1;
console.log(numbers);

const users = [
  { name: "Alex", age: 20 },
  { name: "Bob", age: 21 },
  { name: "John", age: 15 },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
console.log(users[1].age);

function summAge(ageAll) {
  let cout = 0;
  for (let i = 0; i < ageAll.length; i++) {
    cout+= ageAll[i].age;
  }
  console.log(cout)
}

summAge(users);

const num = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);
