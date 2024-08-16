//parameter destructuring

//object
//react

const person ={
    firstName: "Gourav",
    age: 24,
    gender: "male"
}
// function printDetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
//     console.log(obj.gender);
// }
// printDetail(person);

function printDetail({firstName,age,gender}){
    console.log(firstName);
    console.log(age);
    console.log(gender);
}
printDetail(person);