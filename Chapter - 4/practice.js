// Chapter 4 - Practice Set
// Q1 what will the following print in js? console.log("har\"".length)
let str = "Har\""
console.log(str.length)

// Q2 explore the includes, startswith & endswith function of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Q3 Write a prg to convert a given string to lowercase
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Q4 extract the amount out of this string
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Q5 try to change 4th character of a given string were u able to do it?

let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable