enum School18 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

interface Human18 {
  name: string
  print(): void
}

class Person18 implements Human18 {
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

class Student18 implements Human18 {
  name: string = 'no-name'
  school?: School18
  grade?: number

  constructor(name: string, school?: School18, grade?: number) {
    this.name = name
    this.school = school
    this.grade = grade
  }

  print(): void {
    let gd: string = this.grade ? String(this.grade): '-'
    console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)')
  }
}

const taro18 = new Person18('taro', 'taro@mail', 40)
const jiro18 = new Person18('jiro', 'jiro@mail', 34)
const hanako18 = new Student18('hanako')
const sachiko18 = new Student18('sachiko', School18.junior, 10)

const data18: Human18[] = [taro18, jiro18, hanako18, sachiko18]

for (let item of data18) {
  item.print()
}