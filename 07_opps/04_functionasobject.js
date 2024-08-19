function hello(){
    console.log("hello world");
}
//javascript provide ---> function + object
//console.log(hello.name)

//we can add our own properties
//hello.ownProperty="very unique value";

// console.log(hello.ownProperty);
// name properties=> tells function name;

//function provides more use full properties 

console.log(hello.prototype)
//only function provide prototype
if(hello.prototype){
    console.log("prototype is present")
}
else{
    console.log("prototype is not present")
}