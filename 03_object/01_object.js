//object is reference type
// array are good but not sufficient
// for real world data
//object store key value pair 
//object doesn't have index

//how to create object 

const person = {
    "name": "Gourav",  // we can also give name as string because this string 
    age: 24,            // here age also like upper condition name 
    hobbies: ["guitar","cricket","basketball"]
}
console.log(person);

//how to access data from object 
// console.log(person.age);  
// console.log(person.hobbies);
// console.log(person.name);
// console.log(person["name"])

// how to add key value pair in object
person.gender = "male";
console.log(person)