//variables
const userId = 12345;
let userEmail = "suman@google.com";
var userPassword = "123abc";
userCity = "jaypur";//this is also a way to declare a variable but we avoid it.
let userState;
//userId = 9876;//not allowed

 console.log(userId);

 userEmail = "sm@gmail.com";
 userPassword = "2345";
 userCity = "kolkata";

 console.table([userId, userEmail, userPassword, userCity, userState]);

/*
Perfer not to use var.
because of issue in block scope and functional scope 
*/



