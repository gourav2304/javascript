// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["saktiman","doga","powerranger"]
// console.log(myArr[1])
// console.log(myHeros);

 //Array methods

//  myArr.push(6)
//  myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

//  console.log(myArr.includes(9))
//  console.log(myArr.indexOf(3))

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)

console.log("C",myArr);
console.log(myn2)

//ordered collection of items

// let fruits = ["mango","apple","banana"];
// let number = [1,2,3,4,5];
// let mixed = [1,2,3,"Raj","vikash"];
// console.log(fruits[2]);
// console.log(number);
// console.log(mixed);
let fruits = ["mango","apple","banana"];
console.log(fruits);
fruits[2]="kiwi";
console.log(fruits);
console.log(fruits[2])