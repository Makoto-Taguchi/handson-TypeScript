type person8 = {readonly name: string, mail?: string, age?:number, print:() => void}

const ob1_8:person8 = {
  name: 'taro',
  age: 39,
  print: function():void {
    console.log(this.name + ':' + this.age)
  }
}
const ob2_8:person8 = {
  name: 'hanako',
  mail: 'hanako@flower',
  print: function():void {
    console.log(this.name + ':' + this.mail)
  }
}

ob1_8.print()
ob2_8.print()