//some methods

const numbers = [3,11,9,5,7]
// const ans = numbers.some((number)=>{number % 2===0})
// console.log(ans);


const userCart = [
    {userId:1 ,productName:"mobile" , price:12000},
    {userId:2 ,productName:"laptop" , price:15000},
    {userId:3 ,productName:"monitor" , price:222000}
]
const ans = userCart.some((userProduct)=>userProduct.price > 100000)
console.log(ans);
