// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];



//FILTER :---

// const newNums = myNums.filter( (num) => num>4 )

// const newNums = myNums.filter( (num) => {
//     return num>4 
// }) // if we have used curly braces then we will have to write the return...

// console.log(newNums);




// AN Example...

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
// console.log(userBooks);



//  MAPS :---

// const newNums = myNums.map( (num) => num + 10);
// console.log(newNums);

// const newNums = myNums.map( (num) => {return num + 10});
// console.log(newNums);




// Chaining :--
// const newNums = myNums.map( (num) => (num * 10)).map( (num) => (num + 1))

// const newNums = myNums.map( (num) => (num * 10)).map( (num) => (num + 1)). filter( (num) => (num >= 51))

// console.log(newNums);





//  REDUCE :---
const aNums = [1, 2, 3];

// const myTotal = aNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc + currval ;
// // }, 0);
// console.log(myTotal);
// reduce is kinda tricky but very usefull...for exapmle adding prices of items in a shopping list...


// const myTotal = aNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc + currval ;
// }, 0);
// console.log(myTotal);


// const myTotal = aNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);




//  EXAMPLE...

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const addPrice = shoppingCart.reduce( (acc, item) =>acc + item.price, 0);
console.log(addPrice);
