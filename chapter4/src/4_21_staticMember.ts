class StaticHuman21 {
  static fullName: string
  static age: number

  static set(nm: string, ag: number): void {
    this.fullName = nm
    this.age = ag
  }

  static print(): void {
    console.log(this.fullName + '(' + this.age + ')' )
  }
}

StaticHuman21.set('taro', 39)
StaticHuman21.print()