
//  Array Destructuring

//the strings are the values and the others, are variables.

const whatIlike = ["banana", "cucumber","bread", "cakes","pizza"] 
let [fruit, vegetable, ...food] =  whatIlike 
console.log(whatIlike); 

//its useful to extract a string from an array without index notation
// in line 6 the "rest operator" is used to assign the remaining strings after a certain point to a single variable called food. 

console.log (fruit)
console.log (food)


// you can use commas to skip or ignore one value. the position of the commas does affect 
//the output. you can use it either before or after. for example. 

const whatIlike = ["banana", "cucumber","bread", "cakes","pizza"] 
let [fruit,, flour,...food] =  whatIlike 

console.log (flour)


