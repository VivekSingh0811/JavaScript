// NUMBERS :---

const score = 400;
console.log(score);
// here JS has detected that its a number but we can explicitly define that it should be a number...see below
const balance = new Number(100);
// So now balance will be a number only...In output also it will show that its a Number...Basically we have defined a new object of number type...
console.log(balance);
console.log(balance.toString());
//Now number is a string and so it has the properties of string as well...we converted it to string so that we can use properties of strings...
//  For example now we can find the length...
console.log(balance.toString().length);

console.log(balance.toFixed(2));
// This is used to get decimal value output...

const otherNumber = 123.5557799
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const anotherNumber = 1234.5557799
console.log(anotherNumber.toPrecision(3));
// It gives remaining digits as exponentials...

const hundred = 1000000;
console.log(hundred.toLocaleString()); // American Style
console.log(hundred.toLocaleString('en-IN')); // Indian Style




// MATHS :---

// console.log(Math)
// // Type this in browser console and we will get all the features and methods there...

// console.log(Math.abs(-5));
// console.log(Math.round(6.735));
// console.log(Math.ceil(6.1));
// // Ceiling means if it is even slightly greater than 6 it will make it 7...
// console.log(Math.floor(5.9));
// // Floor is opposite of ceiling, it gives the lower value...
// console.log(Math.min(1,2,3,4,5,6,7));
// console.log(Math.max(1,2,3,4,5,6,7));
// console.log(Math.sqrt(25));


// Most used method of Math library is...Random Method...
console.log(Math.random());
//  it gives random value everytime u run it and the range is [0,1]...
//But what if we r making a dice...for this multiply by 10..but value can be zero as well so we add 1 in it...
console.log((Math.random()*10) + 1);
console.log((Math.floor(Math.random()*10) + 1));
// Ewhy floor and why not ceil ?
// bcoz if we use ceil then it will give 11 as well in the output...


// An Important Example...
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min); // A very important Formulae.....

