const isUserLoggdIn = true;;

if(isUserLoggdIn){
    console.log("Access Granted to User !");
}




// // Implicit scope ...(not preferred in companies, as it is less readable)

// const balance = 1000;
// if (balance > 500) console.log("Yes !!!");
// if (balance > 500) console.log("Again Yes !!!"), console.log("Obviously Yes...");


const val = 500;
if(val < 700){
    console.log("Less than 700");
} else if(val > 300){
    console.log("More than 300");
} else if(val != 100){
   console.log("Not equal to 100");
} else{
    console.log("Equal to 500");
}





// TERNARY OPERATOR :---

const IceTeaPrice = 100;
IceTeaPrice >= 80 ? console.log("Costly")
 : console.log("Not Costly")