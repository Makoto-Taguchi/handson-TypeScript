class Person13 {
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

enum School13 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

class Student13 extends Person13 {
  school?: School13
  grade?: number
  constructor(name: string, school: School13, grade: number) {
    super(name)
    this.school = school
    this.grade = grade
    switch(school) {
      case School13.junior:
        this.age = 6 + this.grade; break
      case School13.juniorHigh:
        this.age = 13 + this.grade; break
      case School13.high:
        this.age = 15 + this.grade; break
      default:
        this.age = -1
    }
  }

  print():void {
    let gd: string = this.grade ? String(this.grade): '-'
    switch(this.grade) {
      case 1: gd += 'st'; break
      case 2: gd += 'nd'; break
      case 3: gd += 'rd'; break
      default: gd += 'th'
    }
    console.log(this.name + '(' + this.age + '歳 '+ this.school + ' school: ' + gd + ' grade)')
  }
}

const taro13 = new Person13('taro', 'taro@yamada', 39)
const hanako13 = new Student13('hanako', School13.high, 3)

taro13.print()
hanako13.print()