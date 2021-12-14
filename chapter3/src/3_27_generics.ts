function getRnd27<T>(values: T[]): T {
  const r = Math.floor(Math.random() * values.length)
  return values[r]
}

const data1 = [0, 2, 4, 6, 8, 10]
const data2 = ['グー', 'チョキ', 'パー']
const data3 = [true, false]

for(let i = 0;i < 10;i++) {
  const re1 = getRnd27(data1)
  const re2 = getRnd27(data2)
  const re3 = getRnd27(data3)
  const res = re1 +'(' + typeof(re1) + ')\t'
      + re2 + '(' + typeof(re2) + ')\t'
      + re3 + '(' + typeof(re3) + ')'
  console.log(res)
}