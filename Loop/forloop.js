// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("Hey i am 5");
//     }else{
//         console.log(element);
//     }
//     // console.log(element);
    
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`${i} : i am outer loop`);
    
//    for (let j = 1; j <= 5; j++) {
//         // console.log(`${j} i am inner loop`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//      }    
// }


// let myArray = ["Suman", "Akash", "Gopal"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break , continue

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`5 is detected here`);
//         break;
//     }
//     console.log(`Index value is ${index}`);
// }


for (let index = 1; index <= 10; index++) {
    if (index == 5 || index == 9) {
        continue;
    }
    console.log(`Index value is ${index}`);
}
