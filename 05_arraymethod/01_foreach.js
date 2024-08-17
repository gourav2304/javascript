// array method 
//for each 
const numbers = [4,2,5,8]

// function myFunc(number,index ){
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }


// for(let i =0 ; i<numbers.length;i++){
//     multiplyBy2(numbers[i],i);
// }


// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });


// numbers.forEach(function(number, index){
//     console.log(number*3,index);
// })


const users = [
    {firstName:"Gourav",age:24},
    {firstName:"Sourav",age:23},
    {firstName:"karan",age:22},
    {firstName:"Rishu",age:22},
    {firstName:"Preety",age:22}
]
// users.forEach(function(user){
//     console.log(user.firstName)
// });
users.forEach(user=>{
    console.log(user.firstName)
});
// for(let user of users){
//     console.log(user.firstName);
// }
