let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleStrings());

// let myCretedDate = new Date(2023,0,22)
// let myCretedDate = new Date(2023,0,22,5,6)
//  let myCretedDate = new Date("2024,01,05")
let myCreatedDate = new Date(14-07-2024)
//console.log(myCretedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
// // console.log(myTimeStamp.getDay()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// `${ newDate.getDay()}and the time`

newDate.toLocaleString(`Default`,{
    weekend: "long"
})
