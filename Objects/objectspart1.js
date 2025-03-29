// singleton

//object literals

const sym = Symbol("&");

const jsUser = {
    name : "Suman",
    "full name" :"Suman Maity",
    [sym] : "my&", //This is the way to define symbol as  key value in obj , otherwisw it return string as a datatype.
    age : 21,
    location : "Kolkata",
    email : "Suman@js.com",
    isLoggedIn : false,
    lastLoggedInDays : ["sunday", "tuesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["sym"]);
// console.log(jsUser);

// jsUser.email="Suman@Google.com";
// // console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.email="Suman@youtube.com";
// console.log(jsUser);

jsUser.grettings = function(){
    console.log("Hello JS user");
    
}

jsUser.grettingsTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}` );
    
}
console.log(jsUser.grettings());
console.log(jsUser.grettingsTwo());





