const name = "Vivek ";
const repoCount = 50;

// console.log(name + repoCount + " Value"); 
//There is a better way to do that...


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("Vivek");
// Now copy the above variable and paste it in browser's console...It will also give U all string methods and mastering all those methods is the actual way of mastering strings in JS...

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length); // This will give the length of the string gameName

console.log(gameName.toUpperCase());
console.log(gameName); //original value isn't changed bcoz string a primmitive data type...
console.log(gameName.charAt(3));
console.log(gameName.toUpperCase().charAt(3));

console.log(gameName.indexOf('e'));




// STRING SLICING :---

const newString = gameName.substring(0,4); 
console.log(newString);
//Note: Value at last i.e., 4..that isn't included.....

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);
//Note: We can't give negative values in the substring.....


const newString1 = "    Vivek    ";
console.log(newString1);
console.log(newString1.trim()); // Removes whitespaces adn line terminator characters...

const url = "https://brooklyn.com/vivek%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('vivek'))



// String to array conversion :---

const some = "Vivek-Singh-0811";
console.log(some.split('-'))