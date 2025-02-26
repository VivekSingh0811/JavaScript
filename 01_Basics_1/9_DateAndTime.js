// let myDate = new Date();
// console.log(typeof(myDate))
// console.log(Date);
// console.log('\n')
// console.log(Date());
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// // Thre are muyltiple methods to show the way in whioh u want to represent the date...try to run and check those methods to get an idea...for ex...try toLocaleString method...
// console.log(myDate.toLocaleString());



// // We can create our own date...
// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// // There are other ways as well to create our own date....
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate2.toLocaleDateString());
// console.log(myCreatedDate2.toTimeString());
// // Another Method...
// let myCreatedDate3 = new Date("2023-01-14");
// console.log(myCreatedDate3.toLocaleDateString());

// // to get indian style....MM/DD/YY...
// let myCreatedDate4 = new Date("01-14-2023");
// console.log(myCreatedDate4.toLocaleString());



// We even have TIME STAMPs in day...

// let myTimestamp = Date.now();
// console.log(myTimestamp);
// // It will give the milliseconds value from the 1 jan 1997...
// // it is tough to obtain date from these milliseconds but we stil use it to compare dates...
// let myCreatedDate4 = new Date("01-14-2023");
// console.log(myCreatedDate4.getTime());
// // now we can easily compare these values...
// // Basically used to comapre dates..for example hotel booking apps to comapre booking dates...

// // To convert milliseconds into seconds...
// console.log(Date.now());
// console.log(Math.floor(Date.now() / 1000));



//Note Month start from 0 in JS..0 = Jan, 1 = feb and so on...so use ...getMonth + 1... instead ....so end user may not get confused...


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(`Month is ${newDate.getMonth() + 1} and date is ${newDate.getDate()}`)


//A good feature of toLocaleString...
console.log(newDate.toLocaleString(`default`, {
    weekday : "long",
    day : "2-digit"
}))


