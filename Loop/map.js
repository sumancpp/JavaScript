const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");// This will not print
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key ,`:-`, value);
// }

const myObj = {
    'game1' : 'FreeFire',
    'game2' : 'COC'
}

// for (const [key, value] of myObj) {
//     console.log(key ,`:-`, value);
// }