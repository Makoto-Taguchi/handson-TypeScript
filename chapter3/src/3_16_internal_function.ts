const f16 = (n:number):void => {
  const inF16 = (n: number):void => {
    console.log("value:" + n)
  }
  let total = 0
  for(let i = 1; i <= n; i++ ) {
    total += i
    inF16(total)
  }
}

f16(10)