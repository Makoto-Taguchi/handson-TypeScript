class Person10 {
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

const taro10 = new Person10('taro', 'taro@mail', 39)
const hanako10 = new Person10('hanako', 'hanako@flower')
const sachiko10 = new Person10('sachiko')

taro10.print()
hanako10.print()
sachiko10.print()