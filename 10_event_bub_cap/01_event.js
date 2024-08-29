const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// child.addEventListener('click',()=>{
//     console.log("you clicked on child")
// });
// parent.addEventListener('click',()=>{
//     console.log("you clicked on parent")
// }) ;
// grandparent.addEventListener('click',()=>{
//     console.log("you clicked on grandparent")
// }) ;
// document.body.addEventListener('click',()=>{
//     console.log("you clicked on documentbody")
// }) ;


// event delegation

grandparent.addEventListener('click',(e)=>{
    console.log(e.target);
}) ;  