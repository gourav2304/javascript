//arrow function


// const singHappyBirthday= function(){
//     console.log("happy birthday to you .....")
// }
// singHappyBirthday();
const singHappyBirthday= () => {
    console.log("happy birthday to you .....")
}
singHappyBirthday();

const sumOfTwoNumber =(number1,number2) => {
   return number1+number2;  
}
const ans = sumOfTwoNumber(2,4);
console.log(ans);

// const isEven = (number) => {
//     return(number%2===0);
// }
 
// console.log(isEven(2));

const firstchar = (anystring) => {
    return(anystring[0])
}
console.log(firstchar("abc"));


function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const anss = findTarget(myArray, 4);

const isEven = number=> number%2===0;

console.log(isEven(2))
