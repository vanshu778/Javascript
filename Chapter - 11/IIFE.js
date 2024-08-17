//IIFE
// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456)
//     }, 2000)
//   })
// }
// (async () => {
//   let b = await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
//   let d = await a()
//   console.log(d)
// })()

//Destructuring
//let arr = [3, 5, 8, 9, 12, 14]
// let [a,b,c,d,...rest] = arr
// //console.log(a,b,c,d,rest)
// console.log(a,rest)

// let { a, b } = { a: 1, b: 5 }
// console.log(a, b)

//Spread syntax
// let arr1 = [3,5,8]
// let obj1 = {...arr1}
// console.log(obj1)

// function sum(v1,v2,v3){
//   return v1+v2+v3
// }

// console.log(sum(...arr1))

// let obj2 = {
//   name:"Vanshika",
//   company:"Company xyz",
// address:"XYZ"
// }
// // console.log({...obj2,name:"John", company:"ABC"})
// console.log({name:"John", company:"ABC",...obj2})


//local and global scope

// function ax(){
//   let a = 8;
//   console.log(a)
// }
// //console.log(a)
// ax()

//closure set
// message = "Good Global"
// function hello1() {
//   let message = "Good Morning"
//     // let message = "Good Night"
//     console.log("Hello 1: " + message)
//   let c = function hello2(){
//       console.log("I am c " + message)
//   }
//   return c
// }
// c = hello1()
// c()

//Arrow functions
const sayHello = (name, greeting) => console.log(greeting + " " + name)

const x = {
  name:"Vanshika",
  role:"Js Developer",
  exp:2,
  show: function(){
    let that = this
    console.log(this)
    setTimeout(function(){
      console.log(`The name is ${that.name} \n The role is ${that.role}`)},2000 )
  }
}
//sayHello("Harry","Good Afternoon")
// console.log(x.name, x.exp)
x.show()