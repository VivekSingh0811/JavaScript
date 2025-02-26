// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(); //this will not print
// console.log(); //this will not print
// console.log(); //this will print, that's why we don't use var anymore...


// NESTED SCOPING :---

// function one(){
//     const userName = "Vivek";

//     function two(){
//         const website = "Youtube";
//         console.log(userName);
//     }
//     // console.log(website);
//     two();
// }

// one(); // if we comment out two() then it will not print Vivek bcoz we haven't call function two anywhere...



// if(true){
//     const username = "Vivek";

//     if(username == "Vivek"){
//         const website = "Youtube";
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);






//  IMPORTANT CONCEPT :---

addOne(5);
function addOne(num){
    return num + 1;
}
// addOne(5);
// in above we can take addOne(5) above the function and still we will get the output...but it will not work in below...


const addTwo = function(num){
    return num + 2;
}
// so in addtwo we have kept a function in a variable...in JS variables are very powerful and can hold anything..
addTwo(5);

// so basically in first one we can access the function before its declaration...but not in the second one...