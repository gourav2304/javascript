// //computed properties 
// const key1= "objkey1";
// const key2= "objkey2";
// const key3= "objkey3";

// const value1 = "myValue1";
// const value2 = "myValue2";
// const value3 = "myValue3";

// // const obj = {
// //     [key1]: "value1",
// //     [key2]: "value2"
// // }
// // console.log(obj)

// const obj ={};

// obj[key1] = "value1";
// obj[key2] = "value2";
// obj[key3] = "value3";

// console.log(obj);

const person = "MIke";
const age = 28;

function myTag(strings,personExp,ageExp){
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    const ageIs = ageExp<100 ? "youngester" : "centenarian"

    return `${str0} ${personExp} ${str1} ${ageIs} ${str2}`;
}


const output = myTag`That ${person} is a ${age}. `;
console.log(output);

const grades = [75,95,90,85,80,85];
let gradeSum = 0;

for (let i=0; i<grades.length; i++){
    gradeSum += grades[i];
}
console.log(gradeSum / grades.length)

