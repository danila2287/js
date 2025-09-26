const users={
  0:{
    name:"Bob",
    age:"20"
  },
  1:{
    name:"Alex",
    age:"24"
  },
  2:{
    name:"Lina",
    age:"26"
  }
}

console.log(users[0])

// пример с for но если изменится кол-во полей, придется переписывать условие for

// for (let i=0; i<=2;i++){
//   console.log(users[i].name)
// }

for(const key in users[2]){
  console.log(`${key}`,users[2][key]);
}