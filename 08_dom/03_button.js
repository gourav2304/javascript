// const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.dir(this)
//     });
// }

// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this)
//     });
// }

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//     console.dir(this)
//     });
// })

//practice for click event changing color by click
const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = "yellow"
        e.target.style.color ="#333"
    })
})
