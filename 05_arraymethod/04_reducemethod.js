//reduce method

// const numbers = [1,2,3,4,5,10]

// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue
// })
// console.log(sum);
//accumulator    currentValue       return
// 1                       2              3
// 3                       3              6
// 6                       4              10
// 10                      5              15
// 15                      10             25

const userCart = [
    {userId:1 ,productName:"mobile" , price:12000},
    {userId:2 ,productName:"laptop" , price:15000},
    {userId:3 ,productName:"monitor" , price:22000}
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price
},0);// here 0 is intial price where is getting start
console.log(totalAmount);
// totalPrice        currentProduct      return
// 0                      {}               12000
// 12000                  15000            27000
// 27000                  22000            49000


