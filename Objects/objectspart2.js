const tinder = {};

tinder.id = "Suman123";
tinder.name = "Suman Maity";
tinder.isLoggedIn = false;

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));
console.log(tinder.hasOwnProperty('isLogged'));



// console.log(tinder);

const regularUser = {
    email : "Suman@google.com",
    username : {
        fullName : {
            firstName : "Suman",
            lastName : "Maity",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.username);
// console.log(regularUser.username.fullName);
// console.log(regularUser.username.fullName.firstName);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {2 : "a", 3: "b"}

// const obj3 ={obj1 , obj2};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}//This is latest process.
// console.log(obj3);



