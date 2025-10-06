const first_year = ["Suman", "Akash", "Mehfooz"];
const second_year = ["Sohail", "janababu", "Jahir"];

first_year.push(second_year);
console.log(first_year);
console.log(first_year[3]);
console.log(first_year[3][2]);

const hosterlers = first_year.concat(second_year);
console.log(hosterlers);

const allHostelers = [...first_year,...second_year];
console.log(allHostelers);
This is same as 'concat' process.Most of the cases we use it.Because it can add more than two array.


const Array = [1, 2, 3,[4, 5], 6, [7, [8, 9]]];
console.log(Array.flat(Infinity));
'flat' gives a single array. 

console.log(Array.isArray("Suman"));
console.log(Array.from("Suman"));
console.log(Array.from({name: "Suman"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



