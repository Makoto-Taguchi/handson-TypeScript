class Human22 {
  constructor(readonly name: string, readonly age:number) {
  }

  print(): void {
    console.log(this.name + '(' + this.age + ')')
  }
}

const taro22 = new Human22('taro', 39)
taro22.print()
const hanako22 = new Human22('hanako', 20)
hanako22.print()
