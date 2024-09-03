//find methods
 const myArray = ["elephant", "cat", "dog", "tiger", "zebra"];

// function isLength3(string){
//     return string.length === 3;
// }
//  const ans = myArray.find(isLength3);
// console.log(ans);
 const ans = myArray.find((string)=>{
    return string.length === 3;          // doing with arrow function
});
console.log(ans);

const users =[
    {userId:1, userName:"Gourav"},
    {userId:2, userName:"karan"},
    {userId:3, userName:"rajan"},
    {userId:4, userName:"rishu"},
    {userId:5, userName:"preety"}
    {userId:6, userName:"preet"}
]
const myUser = users.find((user)=>{return user.userId===3})
console.log(myUser );