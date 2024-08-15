//for loop 
//let fruits = ["apple", "mango","grapes","banana"];
// for(let i =0 ; i<=fruits.length-1;i++){
//     console.log(i);
// }
// console.log(fruits.length);
// console.log(fruits(fruits.length-1));
// let fruits2 = [];
// for(let i =0 ; i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
//console.log(fruits2);

//for of loop in array

// const fruits = ["apple", "banana", "mango"];
// const fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

//for in loop array

const fruits = ["apple", "banana", "mango"];
const fruits2 = [];
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
