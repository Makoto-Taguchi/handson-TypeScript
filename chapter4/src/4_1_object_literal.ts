const person1 = {
  name: "taro",
  age: 38,
  print:function():void {
    console.log(this.name + '(' + this.age + ')');
    
  }
}

person1.print()
person1.name = "hanako"
person1.age = 29
person1.print()