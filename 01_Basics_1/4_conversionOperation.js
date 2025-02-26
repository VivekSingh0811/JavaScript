// let score = 33;
// In above we know that value we have got is a number..

// But in below line we don't have any idea about it...so...
// const {score} = request.body

//...we do it like ...
// console.log(typeof(score))
//to find the datatype...




// let score = "33" ;
// // Now its type will be string but we want to do operation on number so we will do typecasting...
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);





// score = "33abc" ;
// score = null;
// score = undefined;
// score = true //boolean value;
// valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);
// // so 33abc is not a number but still it's type will be changed to number but when u will actually try to access it ...it will show something different like NaN...


// CONVERTED TO NUMBER :---
// "33" => 33
// "33abc" => NaN [Not a Number]
// true => 1
// null => 0
// undefined => NaN





// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "Vivek";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// // In this one is converted to boolean and gives true...similarly 0 will give false...


//CONVERTED TO BOOLEAN :---
// 1 => true
// 0 => false
// "" => false
// "Vivek" => true




// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));
// The number is converted to string type successfully......




// **********OPERATIONS*********

let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello";
let str2 = "Vivek";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// // To understand this go to MDN ECMA scripts Abstract operations < Type conversion < ToPrimitive...etc

// console.log(3+4*5%3);
//Point is these things are good for questions but in real world we use paranthesis to be clear...this messy code isn't good for real world applications...



// console.log(+true);  // This is allowed
// console.log(true+);  // This isn't possible

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);
//read about prefix and postfix increment and decrement...(MDN)

