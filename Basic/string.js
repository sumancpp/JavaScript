const name = "Suman";

const age = 21;

/* console.log(name + age);
 console.log("My name is " + name + " and my age is " + age);

 >>This two methods are old method.

*/

//console.log(`My name is ${name} and my age is ${age}`);// This is new method and this is called 'String interpolation'.


const gameName = new String('Suman-in-Hostel');

console.log(gameName[5]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(8));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,3);
console.log(anotherString);

const newStringOne = "    Suman   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suman.com%20";
console.log(url.replace('%20','.lerner'));
console.log(url.includes('rita'));

console.log(gameName.split('-'));













