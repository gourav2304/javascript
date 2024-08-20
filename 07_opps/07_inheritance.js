// class Animal{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return '${this.name}is eating';
//     }
//     isSuperCute(){
//         return age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// class dog extends Animal{

// }
// const tommy = new Animal("seru",2)
// console.log(tommy);
// console.log(tommy.isCute())
class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return '${this.name}is eating';
    }
    isSuperCute(){
        return age<=1;
    }
    isCute(){
        return true;
    }
}
class dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `this ${this.name} is running at ${this.speed}`
    }
}
const tommy = new dog("seru",2,45)
console.log(tommy);
console.log(tommy.isCute())
console.log(tommy.run())