//lexical scope
const myVar = "value1";
function app(){

    function myFun(){

        const myFun2= ()=>{
            console.log("inside fun",myVar);
        }
        //myFun2();

    }
    console.log(myVar)
    myFun();
}
app();

// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions within a program. In simple terms, the lexical scope is the scope of a variable or function based on where it is defined in the source code. The scope is determined by the placement of variables and functions in the code, and it remains the same throughout the execution of the program. Global variables can be accessed from anywhere within the program, while local variables can only be accessed within the function or block in which they are defined  