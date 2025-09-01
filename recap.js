/**
 * 1. var let const
 * 2.default parameter
 * 3. template string 
 * 4.arrow function
 * 5. destructuring and spread operator
 * 6. keys values Object.entries
 * 7.for Of used in array and string ,
 * 8.for in loop used in object
 * */ 

const a =56;
const numbers =[45,65,14];
const person ={
    name:'sakib khan'
}

const message =`Hi ${person.name} has a:${a} access to ${numbers}`;
console.log(message)

const square = x => x*x

const sum =(a,b) => a+b


const {age ,z, ...others} ={x:2, y:20, z:60, name:'Tanzid' ,age:20};

const [fast,sec] =[]