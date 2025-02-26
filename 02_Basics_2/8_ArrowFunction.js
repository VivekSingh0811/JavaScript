const user = {
    username: "Vivek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // it will give the whole current context...
    }
}
// this refers to current context...

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); //This wil give empty..bcoz the workspace of node is the currrent context here...


// function chai(){
//     let username= "Vivek";
//     console.log(this);
//     //this works in object only..it can't refer to context inside a funtion...so below is not allowed, it will give undefined..simialr is the case with username in first example in arrow function below...
//     console.log(this.username);
// }
// chai();




// ARROW FUNCTION :---

// const chai = () => {
//     let username= "Vivek";
//     console.log(this);
//     console.log(this.username); // this will give undefined..
// }
// chai();



//Another example ...
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// below is implicit return...
// const addTwo = (num1, num2) => (num1 + num2)

// Retruning an object ...
const addTwo = (num1, num2) => ({username: "Vivek"})

console.log(addTwo(3,4));

