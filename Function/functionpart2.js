// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(2 , 3 , 4));

function calculateCartPrice(val1 ,...num1){
    return num1;
}
// console.log(calculateCartPrice(2 , 3 , 4));

const user = {
    userName : "Suman",
    price : 300
}

function handleObj(anyuser){
   console.log(`Username is ${anyuser.userName} and price is ${anyuser.price}`);   
}
// handleObj(user);
// handleObj({
//     userName : "Gopal",
//     price : 399
// })

const myNewArray = [100, 200, 300];

function returnSecondValue(anyArray){
    return anyArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000, 2000, 3000]));



