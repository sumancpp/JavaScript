//++++++++++++++ Memory ++++++++++++++++++++

// Stack -> Use in primitive datatypes

// Heap -> Use in non-primitive datatypes


let myName = "Suman";

let newName = myName;

newName = "Riju";

console.log(myName);
console.log(newName);


let userOne = {
    email : "suman!@gmail.com",
    upiId : "suman123@ykbl"
}

let usertwo = userOne;

usertwo.email = "riju@google.com";

console.log(userOne);
console.log(usertwo);


