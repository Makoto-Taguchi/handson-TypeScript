const person2 = Object()
person2.name = "taro"
person2.age = 38
person2.print =function():void {
  console.log(this.name + '(' + this.age + ')');
}

person2.print()
person2.name = "hanako"
person2.age = 29
person2.print()