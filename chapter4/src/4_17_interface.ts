enum School17 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

interface Human17 {
  name: string
  print(): void
}

class Person17 implements Human17 {
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

class Student17 implements Human17 {
  name: string = 'no-name'
  school?: School17
  grade?: number

  constructor(name: string, school?: School17, grade?: number) {
    this.name = name
    this.school = school
    this.grade = grade
  }
  
  print(): void {
    let gd: string = this.grade ? String(this.grade): '-'
    console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)')
  }
}

const taro17 = new Person17('taro', 'taro@mail', 40)
taro17.print()

// const hanako17 = new Student17('hanako', School17.high, 2)
const hanako17 = new Student17('hanako', School17.high)
hanako17.print()