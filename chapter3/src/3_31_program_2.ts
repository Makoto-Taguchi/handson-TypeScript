console.log("Node path = " + process.argv[0])
console.log("script file path = " + process.argv[1])

const data31: number[] = []
for (let i = 2;i < process.argv.length; i++) {
  data31.push(Number(process.argv[i]))
}
console.log('parameters:' + data31)

const f31 = aggregate()

for (let item of data31) {
  const res = f31(item)
  console.log(res)
}

function aggregate(): (n:number) => [number, number, number, number, number] {
  let total = 0
  let totalp = 0
  let totalt = 0
  return (n:number):[number, number, number, number, number] => {
    total += n
    let tax = Math.floor(n - n/1.1)
    totalp += n - tax
    totalt += tax
    return [n, tax, total, totalp, totalt]
  }
}