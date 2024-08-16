// block scope vs function scope 


// let and const are block scope  if let and constv are in block{}then we can't access it from outside {} block
// var is function scope but in var we can access it  from outside the block  

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();