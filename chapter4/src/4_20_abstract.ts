enum School20 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

abstract class Human20 {
  name: string  // プロパティは普通のプロパティだけ使える（抽象プロパティは無い）
  abstract print(): void
}

class Person20 extends Human20 {
  name: string = 'no-name'
  mail: string
  age: number

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    super()
    this.name = name
    this.mail = mail
    this.age = age
  }

  print(): void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')')
  }
}

class Student20 extends Human20 {
  name: string = 'no-name'
  school?: School20
  grade?: number

  constructor(name: string, school?: School20, grade?: number) {
    super()
    this.name = name
    this.school = school
    this.grade = grade
  }

  print(): void {
    let gd: string = this.grade ? String(this.grade): '-'
    console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)')
  }
}

const taro20 = new Person20('taro', 'taro@mail', 40)
const jiro20 = new Person20('jiro', 'jiro@mail', 34)
const hanako20 = new Student20('hanako', School20.high)
const sachiko20 = new Student20('sachiko', School20.junior, 10)

const data20: Human20[] = [taro20, jiro20, hanako20, sachiko20]

for (let item of data20) {
  item.print()
}


interface People20 extends Human20 {
  birth: Date
}

class Employee20 implements People20 {
  name: string = 'no-name'
  company: string = 'no-company'
  birth: Date = new Date()

  constructor(nm: string, cm: string, bth: Date) {
    this.name = nm
    this.company = cm
    this.birth = bth
  }

  print(): void {
    console.log(this.name + '([' + this.company + '], ' + this.birth + ')')
  }
}

const makoto20 = new Employee20('makoto', 'Intel.Inc', new Date('2095/01/17') )
makoto20.print()