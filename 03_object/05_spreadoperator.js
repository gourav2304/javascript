//spread operator
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const myNewArray = [...array1,...array2];
// const myNewArray = [..."123456789"];
// console.log(myNewArray);

//spread operator in object 
const obj1 ={
    key1: "value1",
    key2: "value2"
};
const obj2 ={
    key3: "value3",
    key4: "value4"
};
// const newObject = {...obj1,...obj2, key:value69};// we can also add extra value key:value69 like 
const newObject = {...['item1','item2']}
console.log(newObject);
