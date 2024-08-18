//filter function 
// point to be noted ()=>{} this use in arrow function 
// this the filter method where we seperate even or odd and many more things
const numbers = [1,2,3,4,5,6,7,8];
// const isEven = function(number){
//     return number%2===0;

// }

const evenNumber =numbers.filter((number)=>{
    return number%2!==0;
});
console.log(evenNumber);