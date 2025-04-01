// const userEmail = [];
// if (userEmail) {
//     console.log("we got user email");  
// }else{
//     console.log("we dont got user email");
// }

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

// Falsy Value
// > false
// > 0
// > -0 (For interview)
// > BigInt 0n
// > ""
// > null
// > undefined
// > NaN

// Truthy Value 
// > "0"
// > 'False'
// > " "
// > {}
// > []
// > function(){} (This is call empty function)

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Your object is empty");
// }

// false == 0 [True]
// false == '' [True]
// 0 == '' [True]

// Nullish Coalescing Operator (??)
// => null , undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = undefined ?? 10 ?? 20 ?? 30;


// console.log(val1);

// Ternoary Operator
// condition ? true : false;

const teaPrice = 100;
teaPrice <= 80 ? console.log("Less 80"): console.log("Gretter 80");


