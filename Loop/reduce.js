const myNums = [1, 2, 3]

// const newNums = myNums.reduce(function (acc, currvalue){
//     console.log(`acc is ${acc}, and currval is ${currvalue}`);
     
//     return acc + currvalue;
// },0)

const newNums = myNums.reduce((acc, currval) => acc + currval , 0)

// console.log(newNums);

const shoppingcart = [
    {
        courseName : "Js course",
        price : 1999
    },
    {
        courseName : "py course",
        price : 999
    },
    {
        courseName : "DSA course",
        price : 1599
    },
]

const pay = shoppingcart.reduce((acc,item) => acc + item.price , 0)

console.log(pay);
