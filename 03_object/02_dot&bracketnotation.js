// difference between dot and bracket notation 
const key = "email";
const person = {
    name: "Gourav",  
    age: 24,           
    hobbies: ["guitar","cricket","basketball"]
}
// person.key = "gbgourav2304@gmail.com"
//  console.log(person);  
//output from dot notation

//   { name: 'Gourav',
//     age: 24,
//     hobbies: [ 'guitar', 'cricket', 'basketball' ],
//     key: 'gbgourav2304@gmail.com'  // so here we want email instead of key 
//   }
// bracket notation 
person[key] = "gbgourav2304@gmail.com";
console.log(person);
