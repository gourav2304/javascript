// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["saktiman","doga","powerranger"]
// console.log(myArr[1])
// console.log(myHeros);

 //Array methods

//  myArr.push(6)//add the value from  last if index of element is no initialise
//  myArr.push(7)
// myArr.pop()  //remove the value from last
// myArr.unshift(9)
// myArr.shift()//The shift() method removes the element at the zeroth index 

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
// let fruits = ["mango","apple","banana"];
// let obj = {};
// console.log(fruits);
// fruits[2]="kiwi";
// console.log(fruits);
// console.log(fruits[2])
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

//primitive and reference 

// let num1 = 1;
// let num2 = num1;
// console.log("num1", num1);
// console.log("num2", num2);
// num1++;                                     //primitive
// console.log("after incriment in num1");
// console.log("num1", num1);
// console.log("num2", num2);

// let array1 = ["item1, item2"];
// let array2 = array1;
// console.log("array1" ,array1);
// console.log("array2" ,array2);
// array1.push("item3")             //reference
// console.log("after pusing the the element");
// console.log("array1" ,array1);
// console.log("array2" ,array2);

//use const in array

// heap memory ["banana","apple","mango"] 01dxx is address 

const fruits =["banana","apple","mango"]; // when ever use reference type use const type 
fruits.push("pineapple");
console.log(fruits);