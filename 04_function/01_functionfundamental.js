//function decleration

function singHappyBirthday(){
    // console.log("happy birthday to you ......bla blahh blahh !!!")
}
function sumOfTwoNumber(number1,number2){
   return number1+number2;  
}

const returnesValue = sumOfTwoNumber(9,5);
// console.log(returnesValue);
// console.log(undefined  + undefined );//output is  NaN

//is even 
//input:1 number
//output:true ,false

function isEven(number){
    return(number%2===0);
}
// console.log(isEven(6));

//funtion
//input: string
//output: firstCharacter

// function firstchar(anystring){
//     return(anystring[2])
// }
// console.log(firstchar("abc"))

// function 
// input : array, target (number)
// output: index of target if target present in array 

// function findTarget(array,target){
//     for(let i=0 ; i<=array.length;i++){
//         if(array[i]===target){
//             return(i);
//         }
            
//     }
//     return-1
// }
// const myArray = [1,4,6,7,9];
// const ans = findTarget(myArray,9);
// console.log(ans);


// Function findTarget(array, target):

// Takes two parameters:
// array: An array of numbers.
// target: The number to search for within the array.
// Iterates through each element of the array using a for loop.
// If the current element (array[i]) is equal to the target, it returns the index i of the target element.
// If the loop completes without finding the target, it returns -1 to indicate the target is not present in the array.
// Main Code:

// Creates an array myArray with the values [1, 4, 6, 7, 9].
// Calls the findTarget function with myArray and the target value 9.
// Stores the returned index in the ans variable.
// Prints the value of ans to the console.

function findTheArray (array, target ){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
        
    }
    return -1;
}
const myArray = [1,2,3,7,90]
const ans = findTheArray(myArray, 3)
console.log(ans);
