// let a = 10;
// const b = 20;
// var c = 30;

let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;//This will excuted.
    // console.log("Inner : ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suman";

    function two(){
      const website = "Youtube";
      console.log(username);
    //   one();
      }
    //   console.log(website);
      two();
}

// one();

if (true) {
    const username = "Suman";
    if (username === "Suman") {
        const website = "youtube";
        // console.log(`${username} is watching ${website}`);
        
    }
}

//------------------Interesting--------------------

console.log(addOne(5));
function addOne(num){
  return num+1;
}

addTwo();
const addTwo = function(num){ //This process is not allow to 
  return num+2;               //call a function previously
}

