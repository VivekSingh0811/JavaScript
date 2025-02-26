// Singleton
// object.create
//We will study this later...

// Non singleton...
// Object Literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Vivek",
    "full name" : "Vivek Singh",
    // mySym : "myKey1",
    [mySym] : "myKey1",
    age : 18,
    location: "Jaipur",
    email : "Viveksingh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// ways to access elements of object...
console.log(JsUser.email);
console.log(JsUser["email"]); //this methodis important bcoz dot operator cant access full name and symbol value...
console.log(JsUser["full name"]);

// console.log(JsUser.mySym); // This will print mykey1 but it will not give thesymbol..it will print it as a string...
// console.log(typeof JsUser.mySym);
// so solution is inside object wheen we decalre symbol...write its key inside square brackets...
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


// Overriding vbalues of 0bjects...
JsUser.email = "Newmail@gmail.com";
console.log(JsUser.email);

// If we want to stop it from changing then we can freeze the object...
// Object.freeze(JsUser);
JsUser.email = "Newmaiagainl@gmail.com";
console.log(JsUser.email);
//see the output...the value hasn't changed...

console.log(JsUser);


//We can add the finction as well in the object...
JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting2());