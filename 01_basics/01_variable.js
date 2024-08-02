console.log("Gourav")
const accountId =13343
let accountName = "Gourav"
var accountPassword = "00912A"
accountCity = "jaipur"

/*
please dont use var 
beacause of issue in block scope and functional scope
*/

accountCity = "Bengaluru"
accountPassword = "00618"
console.table([accountName,accountId,accountPassword,accountCity]);

// you cannot start with number

// example :-

// Ivalue (invalid)

// valuel (valid)

// var value1 = 2; 
//console.log(valuel);

// you can use only undersore or dollar symbol

// first_name (valid)

// _firstname (valid)

// first$name (valid) $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
//var firstName = "harshit"; // camel case writing I 
//first name (invalid)

// / convention

// "I start with small letter and use camelCase
// let keyword
// declare keyword with let keyword

// let firstName ="Gourav"
// firstName = "Sourav"
// console.log(firstName);

//block scope and function scope important to know 

//Declare const

const pi = 3.14
//pi = 3.15 give error cant able to change const value
console.log(pi)