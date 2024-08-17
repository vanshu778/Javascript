// // let a = {
// //   name:"Harry",
// //   language:"Javascript",
// //   run:()=>{
// //     alert("self run")
// //   }
// // }
// // console.log(a)


// // let p = {
// //   run: ()=>{
// //     alert("run")
// //   }
// // }
// (
// // p.__proto__={
// //   name:"Jackie"
// // }
// // a.__proto__= p
// // a.run()
// // console.log(a.name)

//   class RailwayForm {
//     constructor(givenname,trainno){
//       console.log("CONSTRUCTOR CALLED... " + givenname + " " + trainno)
//       this.name = givenname
//       this.trainno = trainno
//     }
//     submit() {
//       alert(this.name + ": Your Form submitted");
//     }
//     cancel() {
//       alert(this.name + ": This form is cancelled");
//     }
//     fill(givenname, trainno) {
//       this.name = givenname;
//       this.trainno = trainno;
//     }
//   }

//   // Create a form for Vanshika
//   let vanshika = new RailwayForm("Vanshika",12415);

//   // Create a form for Rohan
//   let rohan = new RailwayForm("Rohan",12422);

//   // Submit the forms
//   vanshika.submit(); // Alerts "Vanshika: Your Form submitted"
//   rohan.submit();    // Alerts "Rohan: Your Form submitted"


//Inheritance

// class Animal{
//   constructor(name,color){
//     this.name=name
//     this.color=color
//   }
//   run(){
//     console.log(this.name + " is running! ")
//   }
//   shout(){
//     console.log(this.name + " is shouting! ")
//   }
// }

// class Monkey extends Animal{
//   eatBanana(){
//     console.log(this.name + " is eating banana")
//   }
// }

// let ani = new Animal("Bruno","white")
// let m = new Monkey("Chimpu","Orange")

// ani.shout()
// m.eatBanana()

//Method overriding

// class Employee {
//   login() {
//     console.log(`Employee has logged in`)
//   }
//   logout() {
//     console.log(`Employee has logged out`)
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves}  leaves - Auto approved`)
//   }
// }
// class Programmer extends Employee {
//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`)
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4)
//     console.log("One extra is granted")
//     // console.log(`Employee has requested ${leaves+1}  leaves(One extra) `)
//   }
// }

//using constructor
// class Employee {
//   constructor(name){
// console.log(`${name} - Employer's constructor is here`)
//     this.name = name
//   }
//   login() {
//     console.log(`Employee has logged in`)
//   }
//   logout() {
//     console.log(`Employee has logged out`)
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves}  leaves - Auto approved`)
//   }
// }


// class Programmer extends Employee {
//    constructor(name){
//      super(name)
//   console.log(`${name} - Programmer's constructor is here. This is a newly written constructor`)
//       this.name = name
//     }
  
//   // constructor(){...If there is no constructor in the child class, this is created automatically
//   //   super()
//   // }
//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`)
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4)
//     console.log("One extra is granted")
//     // console.log(`Employee has requested ${leaves+1}  leaves(One extra) `)
//   }
// }

// let e = new Programmer("Vanshika")
// e.login()
// e.requestLeaves(3)


//Static method
// class Animal{
//   constructor(name){
//     this.name = Animal.capitalize(name)
//   }
//   walk(){
//     alert("Animal " + this.name  + " is walking")
//   }
//   static capitalize(name){
//     return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//   }
// }

// j = new Animal(Animal.capitalize("Vanshika")) 
// j.walk()

//get - Set
// class Animal{
//   constructor(name){
//     this._name = name
//   }
//   fly(){
//     console.log("Mai ud rha hu")
//   }
//   get name(){
//     return this._name
//   }
//   set name(newName){
//     this._name = newName
//   }
// }

// class Rabbit extends Animal{
//   eatCarrot(){
//     console.log("Eating carrot")
//   }
// }

// let a = new Rabbit("Bruno")
// a.fly()
// console.log(a.name)
// a.name="Jack"
// console.log(a.name)
// let c = 56

// console.log(a instanceof Animal)
// console.log(a instanceof Rabbit)
// console.log(c instanceof Animal)



  
  