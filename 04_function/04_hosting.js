//function inside function

function app(){
    const myFun= ()=>{
        console.log("hello my function");
    }
    const addTwoNumber=(num1, num2) =>{
        return(num1+num2)
    }
    const mul= (num1,num2) =>num1*num2;
    
    console.log("inside app")
    myFun();
    console.log(addTwoNumber(2,4));
    console.log(mul(2,5));
}
app();