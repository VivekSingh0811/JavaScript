// Note : Arrsy in JS are Resizable...
// Copy in array creates shallow copy...

const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["Shaktimaan", "Nagraaj"];

// // Another way of declaring an array...
// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2);
// console.log(myArr2[0]);
// console.log(myArr2.length);



// ARRAY METHODS :---

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(9); //adds at start by shifting all the values...but what if myArrr has 1000 elemnts...shifting all that might be time consuming...but we will do optimization later....first of all it should work optimization can be done later.....
// myArr.shift(9); // Removes the starting value...
// console.log(myArr);

// console.log(myArr.includes(9)); // data type of this is boolean...
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(9)); // gives -1 bcoz 9 doesn't exist in myArr

// const newArr = myArr.join(); // it joines all elements in the form of a string...
// console.log(newArr);
// console.log(typeof newArr);




// // SLICE :---
// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3);
// console.log(myn1);

// console.log("B ", myArr);

// //SPLICE :---
// const myn2 = myArr.splice(1,3);
// console.log("C ", myArr);
// console.log(myn2);

// //Conclusion is Splice manipulates the original array and the values that arespliced are removed from original array...also splice include the last index i.e., index 3 in this case...


