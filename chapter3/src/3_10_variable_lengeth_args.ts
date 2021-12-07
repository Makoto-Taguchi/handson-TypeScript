const sum = (...data:number[]):number => {
  let total = 0
  for (let i of data) {
    total += i
  }
  return total
}

console.log(sum(1,2,3,4,5))
console.log(sum(10,20,30,40,50))
console.log(sum(123,456,789))