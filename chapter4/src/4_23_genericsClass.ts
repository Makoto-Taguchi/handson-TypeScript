class Data23<T> {
  data?: T[]

  constructor(...item:T[]) {
    this.data = item
  }

  print(): void {
    if (this.data) {
      for(let item of this.data) {
        console.log(item)
      }
    } else {
      console.log('no data...')
    }
  }
}

const data1_23 = new Data23<string>('one', 'two', 'three')
const data2_23 = new Data23<number>(123, 456, 78, 90)
data1_23.print()
data2_23.print()