// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const items = ['item1','item2','item3']
// const numbers = new Set();
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(1)
// numbers.add(items)
// numbers.add(items) // this is not aplicable two times 
// numbers.add(["item1","item2"])
// numbers.add(["item1","item2"])//this and  upper one is applicable because of different address both have
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// console.log(numbers);

// for(let number of numbers){
//     console.log(number );
// }

const myArray = [1,2,2,3,4,5,6,5,6];
const uniqueElement = new Set(myArray);
// console.log(uniqueElement);
let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length);

 