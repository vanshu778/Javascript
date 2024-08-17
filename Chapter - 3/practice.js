let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }
  // Q1 Write a prgm to print the marks of a student in an object using for loop
  for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  
  // Q2 Write the prgm in q-1 using for in loop
  for (let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key])
  }
  
  // Q3 Write a prgm to print "try again" unitil the user enters the correct number
  let cn = 43
  let i
  while (i != cn) {
    console.log("Try again")
    i = prompt("Enter a number")
  }
  console.log("You have entered a correct number")
  
  // Q4 write a function to find mean of 5 numbers
  const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
  }
  
  console.log(mean(4, 5, 6, 7))