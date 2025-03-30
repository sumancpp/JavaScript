const user = {
    userName : "Suman",
    price : 999,

    welcomeMassage : function(){
        console.log(`Hello ${this.userName}, welcome to my website`);
        console.log(this);
        
    }
}

// user.welcomeMassage();
// user.userName = "Akash";
// user.welcomeMassage();
// console.log(this);

// function thisuse(){
//     username = "Suman";
//     console.log(this.userName);//undefined
//     console.log(this);
// }//We cant use this keyword in function

// thisuse();


// const thisuse = function (){
//     username = "Suman";
//     console.log(this.userName);//undfined
// }

// thisuse();

// const thisuse = () => {
//     username = "Suman";
//     console.log(this.userName);//undfined
// }
// thisuse();

// const addTwo = (num1, num2) => {
//    let num3 = num1 + num2;
//    return num3;
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username : "Suman"})

console.log(addTwo(4, 5));  
