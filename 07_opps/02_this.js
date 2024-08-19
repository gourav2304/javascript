
// window object 
// "use strict" 

// // console.log(window);
// function myFunc(){
//     console.log(this)
// }
// myFunc();
function about (hobby ,favMusician,){
    console.log(this.firstName,this.age,hobby ,favMusician,);
}
const user1 = {
    firstName:"Gourav",
    age:24,
   
}
const user2 = {
    firstName:"Sourav",
    age:23
}
//how to use call
//about.call(user2,"guitar","rafftar")// here we can use user1.about(user1) but for calling about in user2 we use user1.about.call(user2)
//how to use apply
// about.apply(user2,["guitar","rafttar"])
//how to use bind
const func = about.bind(user2,"guitar","rafttar")
func();