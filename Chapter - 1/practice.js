// Q1 - Create a variable of type string and try to add a number to it
let a = "Harry"
let b = 6
console.log(a + b)

//Q2 - Use typeof operator to find the datatype of the string in last question 
console.log(typeof (a+b))

//Q3 - Create a const object in js. can u change it to hold a number late?

const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45
// a1 = {}

//Q4 - Try to add a new key to the const object in prblm3 were u able to do it?
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

//Q5 - write a js pgrm to create a word-meaning dictionary of 5 words.
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])