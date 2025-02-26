// const tinderUser = new Object();
const tinderUser = {}; 

// both type dclaration are same the difference is that one of them is a singleton object and other is non-singleton...

console.log(tinderUser); //ryt now its an empty object...
tinderUser.name = "Vivek";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// // object Nesting...
// const regularUser = {
//     email : "Something@gmail.com", 
//     fullname : {
//         userfullname : {
//             firstname : "Vivek",
//             lastname : "Singh"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);



// console.log(regularUser.fullname?.userfullname.lastname);
// We use this syntax when wqe get response from the api...it checks if we have got that value or not and then does the further...


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = {obj1, obj2}; // this will put both onjects in obj3..not the elemnts of obj1 and obj2...
// console.log(obj3);

// // const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); //thisis better
// console.log(obj3);

// The below syntax we use when we get values from the database :---
// Usually when we get data of user we will get an array of object ...

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "vs@gmail.com"
    },
    {
        id: 4,
        email: "sv@gmail.com"
    }
]


console.log(users[1].email);
console.log(users[1]);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // this returns in an array...
console.log(Object.entries(tinderUser)); // this returns arrays in an array for each key-value pair...
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('Samosa'));
