// function addTwonumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwonumbers(3,4);
// addTwonumbers(3, "4"); //since JS automatically does the type conversion so it treated 3 as a string like 4...  
// addTwonumbers(3, "a");
// addTwonumbers(3, null);

// const result = addTwonumbers(3,5);
// console.log(result); //undefined...bcoz the function isnt returning the value...





// function addTwonumbers(num1, num2){
//     let result = (num1 + num2);
//     return result;
//     // return (num1 + num2)
// }

// const result = addTwonumbers(4,5)
// console.log("Result:",result);



// function LoginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//     }
//     else{
//         return `${username} just logged in`
//     }
// }

// console.log(LoginUserMessage());
// console.log(LoginUserMessage("Vivek"));

// function LoginUserMessage(username = "sam")...now sam is the default value in case when user doesn't enter any value...






// // When we dont know the number of parameters...for example adding the price of all th items in cart...we have no idea...how manyitems user will add in the cart...we use REST operator(triple dots) for that...
// function calculateCartPrice(...num1){
//     return num1;
// }
// // that will return num 1, which is an array that has all the parameters...and then further we can access those elements and add...
// console.log(calculateCartPrice(100, 200, 300));


//just a different way to erite it...
// function calculateCartPrice(value1, value2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(100, 200, 300, 400, 500));
// 100 and 200 will go in val1 & val2 respectively...rest will go in array num1...


// PASSING OBJECT IN A FUNCTION :---
const user = {
    username: "Vivek",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

// we can even pass the object directly...
handleObject({
    username: "Tarin",
    price: 99
})

const myNewArray = [300, 700, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 700, 100, 500]));