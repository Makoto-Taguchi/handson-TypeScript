class Person9 {
  name: string = 'no-name'
  mail?: string
  age?: number
  print():void {
    const ml: string = this.mail ? this.mail: 'no-mail'
    const ag: number = this.age ? this.age: -1
    console.log(this.name + '(' + ml + ',' + ag + ')')
  }
}

const taro9 = new Person9()
taro9.name = 'taro'
taro9.mail = 'taro@mail.com'
taro9.age = 39

taro9.print()