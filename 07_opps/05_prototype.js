
// const userMethods = {
//     about: function(){
//         return  `${this.firstName} is ${this.age} year old`;
//     },
//     is18: function(){
//         return this.age >=18}
//     },
//     sing: function(){
//         return 'lalalallalala';}
// }
//----proto--- is the refrence of creted chain 
//prototype is a object
 
function createUser(firstName,lastName,email,age,address,){
    const user =Object.create(createUser.prototype);
    user.firstName=firstName,
    user.lastname=lastName,
    user.email=email,
    user.age=age,
    user.address=address
    return user;
}
createUser.prototype.about =function(){
    return  `${this.firstName} is ${this.age} year old`;
}
createUser.prototype.is18 =function(){
    return this.age>=18
}
createUser.prototype.sing =function(){
    return 'lalalalalalalaa'
}

const user1 = createUser("gourav","barnwal","gbgourav2304@gmail.com",9,"kolkata")
const user2 = createUser("Sourav","barnwal","gbgourav2304@gmail.com",22,"kolkata")
const user3 = createUser("pogo","barnwal","gbgourav2304@gmail.com",22,"kolkata")
//console.log(user1);

console.log(user1 .is18());

