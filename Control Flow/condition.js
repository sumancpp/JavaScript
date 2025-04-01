// let temp = 40;
// if (temp === 40) {
//     console.log("Temp is  gretter than 40");
    
// } else {
//     console.log("Temp is less than 40");
// }

//condition =>  >, <, <=, >=, ==, !=, ===, !==

// const score = 10;
// if (score == 10) {
//     let power = "fly";
//     console.log(`user is ${power}`);    
// }

// console.log(`user is ${power}`)

// const balance = 500;
//if (balance > 400) console.log("pass"),console.log("pass2");//Dont use this 

// const age = 31;
// if (age > 0 && age < 12) {
//     console.log("You are a child now");
// }
// else if (age > 12 && age < 18) {
//     console.log("You are not a child now");
// }
// else if(age > 18 && age < 28){
//     console.log("You can give vote");
// }
// else if(age > 28 && age < 35){
//      console.log("You can marry");
// }
// else{
//     console.log("Now you can die");
// }

const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}
