function myName(){
    console.log("S");
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
}
// myName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(10,20);
// console.log(result);

function addTwoNumbers(number1 , number2){
    let result = number1 + number2;
    return result;
}
// console.log("Result :" , result);

function loginUserMassage(username = "Ram"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    //     }
    if(!username){
        console.log("Please enter a username");
        return;
        }
     return `${username} just logged in`;
}

// console.log(loginUserMassage("Suman"));
console.log(loginUserMassage());


