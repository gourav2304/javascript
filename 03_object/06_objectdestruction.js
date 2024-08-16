//object destruction;
// const band ={
//     bandName: "led zepplin ",
//     famousSong: "stair way to heaven ",
//     year: 1977,
//     "anotherFamousSong": "big dawgs"
// }
// let {bandName, famousSong,...resprops} = band;
// console.log(band);
// console.log(bandName);
// console.log(resprops);

// object inside array
//very useful in real world application
const users = [
    {userId:1,firstName:"Gourav",gender:"male"},
    {userId:2,firstName:"Sourav",gender:"male"},
    {userId:3,firstName:"Surbhi",gender:"female"}
    ]
const [user1, ,{gender}] = users;
console.log(user1);