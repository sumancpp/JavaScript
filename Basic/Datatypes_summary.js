/*
Datatypes are two types.

1.Primitive ---

7 types :- String , Number , Boolean , Null , Undifinied , symbol , BigInt
*/

// const id = Symbol('123');
// const anotherid = Symbol('123');

// console.log(id == anotherid);

// let bigNumber = 12423544253667787;
// console.log(typeof bigNumber);


/*
2.Reference (Non Primitive) ---

3 types :- Array , Objects , Function

*/


const names = ["Suman" , "Mehfooz" , "Akash"];

console.log(names);

let myObj = {
    name : "Suman",
    age : 21,
}

console.log(myObj);

const myFunction = function(){
    console.log("hello World");
    
}

myFunction();
