const myObj = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python"
}

for (const key in myObj) {
  // console.log(`${key} is shortcut of ${myObj[key]}`);
}

const programming = ["JS", "CPP", "C", "JAVA"];
for (const key in programming) {
//    console.log(programming[key]);
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set('IN', "India");

// for (const key in map) {
//    console.log(key);
// }//It will not give any output 