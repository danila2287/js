"use strict";


const number =(num)=>{
if (num>=0){
    let count=[];
   count=num.toString().split("").sort((a,b)=>{
    return b-a;
   });
    return Number(count.join(""));
}

}
console.log(number(123456789));

