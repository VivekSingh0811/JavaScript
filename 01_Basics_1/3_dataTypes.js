"use strict"

// alert(3+3); This works but only in browser's console....here in node.js the syntax is quite different.....


// console.log(3+3); console.log("Vivek")


let userName = "Vivek"; //String
let age = 22; //Number (Integer) : 2 to the power 53
let isLoggedIn = false; //Boolean : true/false

//Symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// null => Standalone Value
// Undefined => value isn't assigned yet
// symbol => to find uniqueness of components

//object 




// console.log(typeof userName)
// console.log(typeof age)
// console.log(typeof null)
// console.log(typeof undefined)





// SUMMARY :---

// Primitve data types : [7 types]

//All primitive data types are call by value... so whenever we call them we don't get their memory refrence but they are copied to a new place and then in that new place changes are made and the original ones remains unchanged

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt



// Non-Primitive data types :

// 1. Array
// 2. Object
// 3. Function

const BigNumber = 324635478265n
// It is important to add n in the end of BingInt Number...


// Ex of arrays
const heros = ["Shaktimaan", "nagraaj", "doga"];

// Ex of Object
let myObject = {
    name: "Vivek",
    age: 22,

}

// Ex of Function 
const myFunction = function(){
    console.log("Hello World!");
}