//rest parameter

// function myFun(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myFun(3,4,5,6,7)

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(2,3,5,6,7);
console.log(ans);