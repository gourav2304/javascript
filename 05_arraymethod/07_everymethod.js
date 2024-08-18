//every methods 
const numbers = [2,4,6,8,10];

const ans =numbers.every((number)=>{number%2===0})
console.log(ans);


// every method is used for boolean :true/false 
const userCart = [
    {userId:1 ,productName:"mobile" , price:12000},
    {userId:2 ,productName:"laptop" , price:15000},
    {userId:3 ,productName:"monitor" , price:22000}
]

const ans1 = userCart.every((cartBag)=>cartBag.price<30000)
console.log(ans1);