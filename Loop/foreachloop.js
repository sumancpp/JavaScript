const arr = ["py", "cpp", "c", "java", "javascript"];

// arr.forEach( function (value){
//     console.log(value);
// })

// arr.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe (codeName){
//     console.log(codeName);
// }
// arr.forEach(printMe)

// arr.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        language : "C++",
        languageFile : "cpp"
    },
    {
        language : "javascript",
        languageFile : "js"
    },
    {
        language : "python",
        languageFile : "py"
    },
]

// myCoding.forEach((item) => {
//    console.log(item.language);
   
// })

// const coding = ["py", "cpp", "c", "java", "javascript"];
// const values = coding.forEach( (item) =>{
//    console.log(item);

// })
// console.log(values);

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums = mynums.filter((item) => item > 5);

// const nums = mynums.filter((item) => {
//     return item > 5 //must use return keyword here
// });

// const newNums = [];
// mynums.forEach((item) => {
//     if (item > 5) {
//         newNums.push(item);
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter((bk) => bk.genre === 'History');
// userBooks = books.filter((bk) => {return bk.publish >= 2000})

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History';
// })


// console.log(userBooks);


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = mynums.map( (num) => num+10 )
const newNums = mynums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num>= 50)

console.log(newNums);
