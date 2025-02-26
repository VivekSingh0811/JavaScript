//  FOR LOOP :---

// for(let index=0; index<=10; index++){
//     const element = index;
//     console.log(element);
// }

// // Printing table....
// for(let i=1; i<=10; i++){
//     console.log(`10*${i} =`,10*i);
// }

// //Priting table till 10 all together ...
// for(let i=1; i<=10; i++){
//     console.log(`Table of ${i} :`)
//     for(let j=1; j<=10; j++){
//         console.log(`${i}*${j} =`,i*j);
//     }
// }



// BREAK & CONTINUE :---
// easy...bery easy...




// WHILE LOOOP :---

// let index = 0;
// while(index >= -10){
//     console.log(index);
//     index--;
// }




// DO-WHILE LOOP :---

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<=10);


// another example...

// let i = 11;
// do {
//     console.log(i);
//     i++;
// } while (i<=10);



//  FOR-OF LOOP :---

// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//     console.log(i);
    
// }

// const greetings = "HEllo World!"
// for (const greet of greetings) {
//     console.log(greet);
    
// }



// MAPS :---
// (its a readymade object and doesn't take any duplicate values, its all values are unique...)

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN", "India"); // will not take this again in map...

// console.log(map);

// using for of loop in maps...
// for (const key of map) {
//     console.log(key);
// }


// for (const [key, value] of map) {
//     console.log(key, `: `, value);
// }


const myObject = {
    "game1" : "NFS",
    "game2" : "Wukong",
    "game3" : "SpiderMan"
}
// for(const [key, value] of myObject){
//     console.log(`${key} : ${value}`);
    
// } // objects can't be iterated using FOR OF loop...It is done usinf FOR-IN LOOP.....






// FOR-IN LOOP :---

// const anotherObject = {
//     js: "javasccript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by Apple"
// }

// for(const key in anotherObject){
//     // console.log(`${key}`);
//     console.log(key);
// }

// for(const key in anotherObject){
//     console.log(anotherObject[key]);
// }

// for(const key in anotherObject){
//     console.log(`${key} is shortcut for ${anotherObject[key]}`);
// }


// using for-in loop in Arrays...
// const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     // console.log(key);
//     // now above will give the index no. istead of the element...
//     console.log((programming[key]));
// }

// NOTE: just like objects in for of...We can't iterate over Map using for in...




//  FOR-EACH LOOP :---
// look syntax carefully...its different...

// printing array...using function
// const coding = ["js","ruby", "java", "python", "cpp"];


// coding.forEach(function(i){
//     console.log(i);
// })

// Using arrow function...
// coding.forEach((i) => {
//     console.log(i);
// })



// another possile way :---
// function printme(i){
//     console.log(i); 
// }
// coding.forEach(printme);



// coding.forEach( (i,index, arr) => {
//     console.log(i, index, arr);   
// } ) 
// forEach brings index and whole array with it by-default...



// object inside array and acccessing its keys ad values using for Each loop...

// const myCoding = [
//     {
//         language: "Javascript",
//         languageFileName: "js"
//     },
//     {
//         language: "Java",
//         languageFileName: "java"
//     },
//     {
//         language: "Python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.language);
//     console.log(item.languageFileName);
//     console.log("\n");
// })



// forEach cant return...
// const acoding = ["js","ruby", "java", "python", "cpp"];

// const values = acoding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); // here we will get undefined bcoz forEach loop never returns any value...





const myNums = [1, 2, 3, 4, 5, 6, 7,8 , 9];

const newNums = [];

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums);



