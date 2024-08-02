const name = "Gourav"
const repoCount = 50

//console.log(name + repoCount + "value")
console.log(`hello my name is ${name} and repocount is ${repoCount} `) 

const gameName = new String(`furious-attack`)

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf(`i`))

const newString = gameName.substring(0 ,4)
console.log(newString);
const anotherString = gameName.slice( -8 ,4)// start index , end index
console.log(anotherString)

const newStringOne = "    Gourav    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://Gourav.com.furiousattackk.%20.site.production"
console.log(url.replace(`%20`,`-`)) // .replace is used for changing the chareecter or letter  

console.log(url.includes(`sourav`))// .includes is used for knowing chracter true or false by getiing in searchelement

console.log(gameName.split(`-`))

// string indexing
 let firstName = "Gourav"

//  G  o  u  r  a  v
//  0  1  2  3  4  5

//console.log(FirstName[2])
//length of string
//firstName.length

console.log(firstName.length);
console.log(firstName[firstName.length-1]);

// last index: length-1