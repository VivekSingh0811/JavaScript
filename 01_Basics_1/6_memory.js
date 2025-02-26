// Stack & Heap Memory :---

// Stack -> used for Primitive data
// Heap  -> used for Non-Primitive data


let myYoutubeMain = "Ballestico";
let anotherName = myYoutubeMain;

anotherName = "Brooklyn"

console.log(myYoutubeMain); //It still has the same value...bcoz its copy was used as it is pass by value not the pass by refrence...
console.log(anotherName);

console.log("\n"); //New line Character in Node JS...

let userOne = {
    email: "User@gmail.com",
    upi: "user@ybl"
}

console.log(userOne.email);

let userTwo = userOne // This is the pass by refrence as its non-primitive data type...

userTwo.email = "Something@gmail.com" //Again we use the 'DOT OPERATOR'...
console.log(userOne.email);
console.log(userTwo.email);


