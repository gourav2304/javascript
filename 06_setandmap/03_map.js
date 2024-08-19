
// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

//object literal
//key --> string
//key --> symbol

// const person ={
//     firstName: "Gourav",
//     age: 24,
//     1: "one"
// }
// console.log(person.firstName)
// console.log(person.key)
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

//key value pair

// const person = new Map();
// person.set('firstName','Gourav');
// person.set('age','24');
// person.set(1,'one');
// console.log(person);
// console.log(person.get('age'));
// // console.log(person.key());
// for(let key of person.keys()){
//     console.log(key, typeof key)
// }

// for(let [key , value] of person){
//     console.log(Array.isArray(key));
//     console.log(key,value);
// }

const person1 ={
    id:1,
    firstName:"Gourav"
}
const person2 ={
    id:1,
    firstName:"Apsara"
}
const extraInfo = new Map()
extraInfo.set(person1,  {age:24,gender:'male'})
extraInfo.set(person2,  {age:24,gender:'female'})
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);





