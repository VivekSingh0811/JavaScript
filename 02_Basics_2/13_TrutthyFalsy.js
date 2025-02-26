// const userEmail = "Vivek@gmail.com";

// if(userEmail){
//     console.log("Got User Email");
// } else {
//     console.log("Don't have User Email");
// }
// Here we haven't used any true or false...it has been assumed that if string is there then its true...


// Falsy Values :---

// false
// 0
// -0
// BigInt -> 0n
// null
// undefined
// NaN
// Empty string -> ""



//  Rest are truthy values...
// for ex: "0", 'false', " ", [], {}, fuction(){}, 


// const userEmail = []
// if (userEmail.length === 0){
//     console.log("Array is Empty !");
// }



// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

// obj.keys -> will give keys
//  obj.keys(emptyObj) -> returns an array of keys
// obj.keys(empryObj).length -> gives the length of that array...if length is zero...that means the object is empty...



// NULLISH COALESCING OPERATOR :---(made only for null and undefined)

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 25 ?? 20;
console.log(val1);

