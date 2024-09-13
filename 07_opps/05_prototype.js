
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
 
// function createUser(firstName,lastName,email,age,address,){
//     const user =Object.create(createUser.prototype);
//     user.firstName=firstName,
//     user.lastname=lastName,
//     user.email=email,
//     user.age=age,
//     user.address=address
//     return user;
// }
// createUser.prototype.about =function(){
//     return  `${this.firstName} is ${this.age} year old`;
// }
// createUser.prototype.is18 =function(){
//     return this.age>=18
// }
// createUser.prototype.sing =function(){
//     return 'lalalalalalalaa'
// }

// const user1 = createUser("gourav","barnwal","gbgourav2304@gmail.com",9,"kolkata")
// const user2 = createUser("Sourav","barnwal","gbgourav2304@gmail.com",22,"kolkata")
// const user3 = createUser("pogo","barnwal","gbgourav2304@gmail.com",22,"kolkata")
// //console.log(user1);

// console.log(user1 .is18());

// var bird = {
//     hasWings: true,
//     hasFeather: true,
//     hasFly: true
// }
// var eagle1 = Object.create(bird)
// console.log("eagle :",eagle1)
// console.log("eagle has wings :" ,eagle1.hasWings)
// console.log("eagle has feather :", eagle1.hasFeather)
// console.log("eagle is flying: " , eagle1.hasFly)

// var eagle2 = Object.create(bird)
// console.log("eagle :",eagle1)
// console.log("eagle has wings :" ,eagle1.hasWings)
// console.log("eagle has feather :", eagle1.hasFeather)
// console.log("eagle is flying: " , eagle1.hasFly)


// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// class StationaryBike {
//     constructor(position, gear){
//         this.position = position
//         this.gear = gear;
//     }
// }
// class Treadmill {
//     constructor(position , modes){
//         this.position = position;
//         this.modes =modes;
//     }
// }

// class Gym{
//         constructor(openHrs,stationaryBikePos,treadmillPos){
//             this.openhrs = openHrs;
//             this. stationaryBike = new StationaryBike(stationaryBikePos, 8)
//             this.treadmill = new Treadmill(treadmillPos,5)
//         }
// }
// var myGym = new Gym("7-22","right-corner","left-corner")

// console.log(myGym.stationaryBike)
// console.log(myGym.openhrs)
// console.log(myGym.treadmill)



// class Animal {
//     constructor(color = 'yellow', energy = 100) {
//         this.color = color;
//         this.energy = energy;
//     }
//     isActive() {
//         if(this.energy > 0) {
//             this.energy -= 20;
//             console.log('Energy is decreasing, currently at:', this.energy)
//         } else if(this.energy == 0){
//             this.sleep();
//         }
//     }
//     sleep() {
//         this.energy += 20;
//         console.log('Energy is increasing, currently at:', this.energy)
//     }
//     getColor() {
//         console.log(this.color)
//     }
// }

// class Cat extends Animal {
//     constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canClimbTrees = canClimbTrees;
//         this.canJumpHigh = canJumpHigh;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Bird extends Animal {
//     constructor(sound = 'chirp', canFly = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class HouseCat extends Cat {
//     constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
//         super(sound,canJumpHigh,canClimbTrees, color,energy);
//         this.houseCatSound = houseCatSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.houseCatSound);
//     }
// }

// class Tiger extends Cat {
//     constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
//         super(sound,canJumpHigh,canClimbTrees, color,energy);
//         this.tigerSound = tigerSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.tigerSound);
//     }
// }

// class Parrot extends Bird {
//     constructor(canTalk = false, sound,canFly, color,energy) {
//         super(sound,canFly, color,energy);
//         this.canTalk = canTalk;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         if (this.canTalk) {
//             console.log("I'm a talking parrot!");
//         }
//     }
// }

// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp

// polly.makeSound(); // I'm a talking parrot!
// polly.makeSound(true); // chirp, I'm a talking parrot!

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180

// var leo = new HouseCat();

// // leo, no purring please:
// leo.makeSound(false); // meow
// // leo, both purr and meow now:
// leo.makeSound(true); // purr, meow

// var cuddles = new Tiger();
// cuddles.makeSound(false); // Roar!
// cuddles.makeSound(true); // purr, Roar!


// Task 1: Code a Person class
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object
function intern() {
    let intern = new Worker("Bob", 21, 110);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object
function manager() {
    let manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

// Testing the intern and manager functions
console.log(intern()); // Check intern object after goToWork()
console.log(manager()); // Check manager object after doSomethingFun()
