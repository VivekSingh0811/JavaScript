const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

// marvel.push(dc);
// // ppl assume it will mwrge the both the arraus...but in reality it just add the array as an elemnt...so we will get array inside array...
// console.log(marvel);
// console.log(marvel[3])
// console.log(marvel[3][2]);



// marvel.concat(dc);
// console.log(marvel);
// //Note concat doesn't modify the array..it returns a new array...so..
// const collabHero = marvel.concat(dc);
// console.log(collabHero);

// // Another way to concatenate :-- (using spread method)
// const againCollab = [...marvel, ...dc];
// console.log(againCollab);



// const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const usableNewArr = newArr.flat(Infinity); //if I want all elements in just one array
// console.log(usableNewArr);




// console.log(Array.isArray("Vivek"));
// console.log(Array.from("Vivek"));
// console.log(Array.from({name : "Vivek"}));
// console.log(Object.keys({name : "Vivek"}));
// console.log(Object.values({name : "Vivek"}));



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


