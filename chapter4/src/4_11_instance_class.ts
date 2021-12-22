class Person11 {
  name: string
  mail: string
  age: number

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name,
    this.mail = mail,
    this.age = age
  }

  print():void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')')
  }
}

const taro11 = new Person11('taro', 'taro@mail', 39)
const hanako11 = new Person11('hanako', 'hanako@flower')

console.log(taro11 instanceof Person11
    === hanako11 instanceof Person11 === true)

console.log(taro11.constructor.name)
console.log(hanako11.constructor.name)
console.log(Person11.name)