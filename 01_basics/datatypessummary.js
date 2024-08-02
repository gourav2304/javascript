//primitive data types
// 7 : String , Number, Boolean ,null, undefined, symbol,BigInt

const score = 100
const scoreValue = null

const isLoggedIn = false
const outsideTemp = null // output is in typeof = object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 7373833884393890n //output is in typeof = bigint
console.log(typeof outsideTemp)

//References ( NON primitive)

//Array,Object, Function

// const heros = ["shaktiman","naagraj","doga"];
// let myObj = {
//     name: "Gourav",
//     age: 24,
// }

// const myFunction = Function()
// {
//     console.log("hello world");
// }
//     stack (primitive) , heap (Non- premitive)

let myYoutubeChannel = "Gourav barnwal"

let anotherChannel = myYoutubeChannel
anotherChannel = "chai aur code"
// console.log(anotherChannel)
// console.log(myYoutubeChannel)

let userOne =
{
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne
userTwo.email = "Gourav.google.com"

console.log(userTwo)



