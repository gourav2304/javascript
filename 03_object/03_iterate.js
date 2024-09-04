// how to iterate object
const person = {
    name: "Gourav",  
    age: 24,           
    "person hobbies": ["guitar","cricket","basketball"]
}
//for in loop
//object.key

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, ":" ,person[key] );
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)))  ;
// console.log(val);

//for of loop 

for(let key of Object.keys(person)){
    console.log(person[key]);
}