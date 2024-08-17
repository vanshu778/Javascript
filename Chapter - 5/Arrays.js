// let marks_class_12 = [91,82,73,84,null,false,"Not present"]
// console.log(marks_class_12)

// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(marks_class_12[5])
// console.log(marks_class_12[6])
// console.log(marks_class_12[7]) //will be undefined because index 7 is not exist
// console.log(marks_class_12.length)
// marks_class_12[7] = 89 //adding a new value to the array
// console.log(marks_class_12[7])

// marks_class_12[0] = 96
// console.log(marks_class_12)

//Array Methods
let num = [1, 8, 9, 4, 5];
// let b = num.toString(); //b is now a string
// //console.log(b,typeof b)

// let c = num.join("_");
// console.log(c, typeof c);

// num.pop();
// console.log(num);

// num.push(56);
// console.log(num);

// num.shift();
// console.log(num);

// num.unshift(78);
// console.log(num);

// delete num[0];
// console.log(num);
// console.log(num.length);

// let num1=[1,9,13,14]
// num.concat(num1)
// console.log(num,num1)

// num1.sort()
// console.log(num1)

// num.sort()
// console.log(num)

// let compare = (a,b)=>{
//   return b-a
//   //return a-b
// }
// let num2=[551,22,3,14,5,6,7,8,229]
// num2.sort(compare)
// console.log(num2)

// num.reverse()
// console.log(num)

// //splice and slice
// num.splice(77,34,24,22,11)
// console.log(num)

// let newnum = num.slice(3)
// console.log(newnum)

//loops using arryas
// let num=[3,54,1,2,4]

// // for(let i=0;i<num.length;i++){
// //   console.log(num[i])
// // }
// num.forEach((element)=>{
//   console.log(element*element)
// })

// //Array.from
// let name = "Harry"
// let  arr = Array.from(name)
// console.log(arr)

// //for...of
// for(let i of num){
//   console.log(i)
// }

// //for...in
// for(let i in num){
//   console.log(num[i])
// }

// let arr=[45,23,21]
// //array map method
// let a = arr.map((value,index,array)=>{
//   console.log(value,index,array)
//   return value + index
// })
// console.log(a)

//array filter method]
// let arr2=[45,23,21,0]
// let a2 = arr2.filter((a)=>{
//   return a<10
// })
// console.log(a2,arr2)

//array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarr3);
