//map method

const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number * number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return `index : ${index}, ${number * number}`;
// });
// console.log(squareNumber);
const users = [
    {firstName:"Gourav",age:24},
    {firstName:"Sourav",age:23},
    {firstName:"karan",age:22},
    {firstName:"Rishu",age:22},
    {firstName:"Preety",age:22}
]
const userNames= users.map((user)=>{
    return user.firstName;
});
console.log(userNames);