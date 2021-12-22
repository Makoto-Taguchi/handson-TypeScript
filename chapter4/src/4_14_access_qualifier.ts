class Person14 {
  protected name: string = 'no-name'
  private mail: string
  public age: number

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name,
    this.mail = mail,
    this.age = age
  }

  print():void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')')
  }
}

enum School14 {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}

class Student14 extends Person14 {
  school?: School14
  grade?: number
  constructor(name: string, age: number, school: School14, grade: number) {
    super(name)
    this.school = school
    this.grade = grade
    this.age = age
    switch(school) {
      case School14.junior:
        this.age = 6 + this.grade; break
      case School14.juniorHigh:
        this.age = 14 + this.grade; break
      case School14.high:
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

const taro14 = new Person14('taro', 'taro@yamada', 39)
const hanako14 = new Student14('hanako', 17, School14.high, 2)

// 以下二つはエラー
// hanako14.name = '花子'
// hanako14.mail = 'hanako@mail'
hanako14.age = 28

taro14.print()
hanako14.print()