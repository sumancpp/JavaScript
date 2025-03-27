// Date

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let createMyDate = new Date(2022, 1, 2);
// console.log(createMyDate.toDateString());

// let date = new Date(2022, 1, 2, 18, 7);
// console.log(date.toLocaleString());

// let oneDate = new Date("2020-02-15");
// console.log(oneDate.toLocaleString());

// let twoDate = new Date("07-20-2025");
// console.log(twoDate.toLocaleString());
// console.log(twoDate.getTime());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let someDate = new Date();
// console.log(someDate);
// console.log(someDate.getMonth());
// console.log(someDate.getDate());
// console.log(someDate.getDay());

let zeroDate = someDate.toLocaleString('default',{
   weekday: "long",
})

console.log(zeroDate);








