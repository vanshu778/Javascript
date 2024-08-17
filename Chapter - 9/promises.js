// let promise = new Promise(function(resolve, reject) {
//   alert("Hello")
//   resolve(56)
// })
// console.log("Hello One")
// setTimeout(function() {
//   console.log("Hello Two in 2 seconds")
// }, 2000)
// console.log("My name is " + "Hello Three")
// console.log(promise)


//then and catch
// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I am resolved")
//     resolve(true)
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I am rejected")
//     reject(new Error("I am an error"))
//   }, 5000)
// })

// //console.log(p1,p2)

// p1.then((value) => {
//   console.log(value)
// })

// // p2.then((value) => {
// //   console.log(value)
// // })

// p2.catch((error) => {
//   console.log("some error occured in p2")
// })

//promise chaining
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds")
//     resolve(56)
//   }, 2000)
// })
// p1.then((value) => {
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2")
//     }, 2000)
//   })
//   return p2
// }).then((value) => {
//   console.log("We are done")
//   return 2
// }).then((value)=>{
//   console.log("Now we are pakka done")
// })


//promise chaining example
// function getCheese() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = "🧀";
//       resolve(cheese);
//     }, 2000);
//   });
// }

// function makeDough(cheese) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = cheese + "🫓";
//       // resolve(dough);
//       reject("Bad cheese");
//     }, 2000);
//   });
// }

// function bakePizza(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizza = dough + "🍕";
//       resolve(pizza);
//     }, 2000);
//   });
// }

// async function orderPizza() {
//   try {
//       const cheese = await getCheese();
//       console.log("here is the cheese", cheese);

//       const dough = await makeDough(cheese);
//       console.log("here is the dough", dough);

//       const pizza = await bakePizza(dough);
//       console.log("here is the pizza", pizza);
//   } catch (err) {
//       console.log("error occured", err);
//   }
//   console.log("Process ended");
// }

// orderPizza();

// getCheese()
//     .then((cheese) => {
//         console.log("here is the cheese", cheese);
//         return makeDough(cheese);
//     })
//     .then((dough) => {
//         console.log("here is the dough", dough);
//         return bakePizza(dough);
//     })
//     .then((pizza) => {
//         console.log("here is the pizza", pizza);
//     })
//     .catch((data) => {
//         console.log("error occured", data);
//     })
//     .finally(() => {
//         console.log("Process ended");
//     });

//Attaching multiple handlers to a promise
// let p1=new Promise((resolve,reject)=>{
//   alert("Hey I am not resolved")
//     setTimeout(()=>{
//       resolve(1);
//     },2000)
// })
// p1.then(()=>{
//   console.log("Hurray")
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(4)
//     },6000)
//   })
// }).then((value)=>{
//   console.log(value)
// })
// p1.then(()=>{
//   console.log("Congratulations this promise is nowresolved")
// })


//Promise API
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 1");
    }, 1000);
  })
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2");
      //reject(new Error("Error"))
    }, 2000);
  })
  
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 3");
    }, 3000);
  })
  
  // p1.then((value) => {
  //   console.log(value)
  // })
  
  // p2.then((value) => {
  //   console.log(value)
  // })
  
  // p3.then((value) => {
  //   console.log(value)
  // })
  
  //let promise_all = Promise.all([p1, p2, p3])
  //let promise_all = Promise.allSettled([p1, p2, p3])
  let promise_all = Promise.race([p1, p2, p3])
  //let promise_all = Promise.any([p1, p2, p3])
  //let promise_all = Promise.resolve(6)
  // let promise_all = Promise.reject(new Error("Hey"))
  // promise_all.then((value) => {
  //   console.log(value)
  // })
  
  // async/await function 
  //  async function harry(){
  //    let delhiWheather = new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve("27 deg")
  //   },1000)
  // })
  
  // let bangloreWheather = new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve("21 deg")
  //   },7000)
  // }) 
  //    console.log("Fetching Delhi Weat her please wait...")
  //    let delhiW = await delhiWheather
  //    console.log("Fetching Delhi Weather is "+ delhiW)
  //     console.log("Fetching Bangalore Weather please wait...")
  //    let bangaloreW = await bangloreWheather
  //     console.log("Fetching Bangalore Weather is "+ bangaloreW)
  //    return[delhiW, bangaloreW]
  //  }
  // console.log("Welcome to weather contro room")
  // let a = harry()
  // console.log(a)
  