"use strict" //treat all JS code as newer version  

const accountId = 1444553

// let and var are to methods to declare variables in JS...but we don't use var anymore bcoz it can't handle scope of variable that's why we came up with let.....
let accountEmail = "Something@gmail.com"
var accountPassword = "12345"

//Since JS is a very safe language so we can declare a variable without even using let or var, but its not a good habit so don't do it.....
accountCity = "Jaipur"

let accountState //It doesn't matter whether u put semoi-colon or not in JS.....But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.....so sometimes it is necessary to use semi-colon.....

// accountId = 2 //sice it is a const variableso we can't modify it now....
console.log(accountId)

accountEmail = "New@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"




// TABULAR STRUCTURE :---

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
