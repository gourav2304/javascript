
let array1 = ["item1", "item2"];
//let array2 = ["item1", "item2"]; //---not valid 

// let array2 = array1.slice(0)
// let array2 = array1.slice(0).concat(["item4","item5"]); //formula 1 for cloning by adiing extra item  if required 

// let array2 = [].concat(array1)
//let array2 = [].concat(array1,["item4","item5"])   // formula 2 for cloning extra item by adding extra item as required

     //spread operator 
// let array2 = [...array1 ];
// let array2 = [...array1,"item4","item5" ]; //formula 3 for cloning with  extra item
let oneMoreArray = ["item6","item7"]
let array2 = [...array1,...oneMoreArray ];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);