//callback function

function myFunc2(name){
    console.log("calling function from funtion my fun ");     // third this get called 
    console.log("my name is ", name);      // and then this 

}



function myFunc(callback){
    console.log("calling myfunc2 from this function callback");  //1. first this is calling 
    callback("Gourav");//2. second this got called 
}

myFunc(myFunc2);