enum School19 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

interface Human19 {
  name: string
  print(): void
}

class Person19 implements Human19 {
  name: string = 'no-name'
  mail: string
  age: number

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name
    this.mail = mail
    this.age = age
  }

  print(): void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')')
  }
}

class Student19 implements Human19 {
  name: string = 'no-name'
  school?: School19
  grade?: number

  constructor(name: string, school?: School19, grade?: number) {
    this.name = name
    this.school = school
    this.grade = grade
  }

  print(): void {
    let gd: string = this.grade ? String(this.grade): '-'
    console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)')
  }
}

const taro19 = new Person19('taro', 'taro@mail', 40)
const jiro19 = new Person19('jiro', 'jiro@mail', 34)
const hanako19 = new Student19('hanako', School19.high)
const sachiko19 = new Student19('sachiko', School19.junior, 10)

const data19: Human19[] = [taro19, jiro19, hanako19, sachiko19]

for (let item of data19) {
  item.print()
}


interface People19 extends Human19 {
  birth: Date
}

class Employee19 implements People19 {
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

const makoto19 = new Employee19('makoto', 'Intel.Inc', new Date('1995/01/17') )
makoto19.print()