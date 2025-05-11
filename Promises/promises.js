const promiseOne = new Promise(function(resolve , reject) {
    setTimeout(function(){
        console.log("Task is complete");
        resolve();
    },1000)
})

// .then() function is directly connected with resolve.
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Taks 2 is complete");
        resolve();
    },1000)
}).then(function(){ 
    console.log("promise 2 consumed");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Suman", 
                gmail : "Suman@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
   console.log(user);
   
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "Suman",
                password : "123"
            })
        }else{
            reject("ERROR : Somthing Went Wrong");
        }
    },1000)
})


promiseFour.then((user) => {
  console.log(user);
  return user
}).then((user) => {
    console.log(user.password);
}).catch(() => {
    console.log("Error");
}).finally(() => console.log("The Promise is either resolved or rejected")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
