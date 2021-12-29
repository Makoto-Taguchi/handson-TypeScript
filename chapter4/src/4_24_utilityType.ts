type Human24 = {
  name: string
  mail?: string
  age?: number
}

class Person24 {
  human: Required<Human24>

  constructor(nm:string, ml:string, ag:number) {
    this.human = {
      name:nm,
      mail:ml,
      age:ag
    }
  }

  print():void {
    console.log(this.human.name + '(' + this.human.age + '::' + this.human.mail + ')')
  }
}

const taro24 = new Person24('taro', 'taro@yamada', 39)
taro24.print()