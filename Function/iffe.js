// Immediatly Invoked Function Expressions (IIFE)


// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();//In this line ; is importent for run next function

(function coffe(){
    console.log(`DB CONNECTED TWO`);
})();//In this line ; is importent for run next function

//No name IFFE
// ( () => {
//     console.log(`DB CONNECTED THREE`);
// })()

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})(`Suman`)