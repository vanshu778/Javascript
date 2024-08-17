//Practice Set

class Complex{
    constructor(real,imaginary){
      this.real = real
      this.imaginary = imaginary
    }
    add(num){
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
    }
    get real(){
      return this._real
    }
    get imaginary(){
      return this._imaginary
    }
  
    set real(newReal){
      this._real = newReal
    }
    set imaginary(newImaginary){
      this._imaginary = newImaginary
    }
  }
  
  let a = new Complex(2,4)
  a.real = 10
  a.imaginary = 10
  let b = new Complex(6,2)
  a.add(b)
  console.log(`${a.real}+i${a.imaginary}`)
  
  // class Human{
  //   constructor(name,favfood){
  //     this.name = name
  //     this.favfood = favfood
  //   }
  //   walk(){
  //     console.log(this.name + " Human is walking")
  //   }
  // }
  
  // class Student extends Human{
  //   walk(){
  //     console.log(this.name + " Student is walking")
  //   }
  // }
  
  // let o = new Student("Harry","Bhindi")
  // o.walk()
  
  // console.log(o instanceof Human)