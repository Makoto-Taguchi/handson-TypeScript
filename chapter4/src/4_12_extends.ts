class Person12 {
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

enum School {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

class Student12 extends Person12 {
  school?: School
  grade?: number
  constructor(name: string, school: School, grade: number) {
    super(name)
    this.school = school
    this.grade = grade
    switch(school) {
      case School.junior:
        this.age = 6 + this.grade; break
      case School.juniorHigh:
        this.age = 12 + this.grade; break
      case School.high:
        this.age = 15 + this.grade; break
      default:
        this.age = -1
    }
  }
}

const taro12 = new Person12('taro', 'taro@yamada', 39)
const hanako12 = new Student12('hanako', School.high, 2)

taro12.print()
hanako12.print()