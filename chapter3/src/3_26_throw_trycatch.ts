const f26 = (n:number):number => {
  if (n < 0) {
    throw Error("負の値です")
  }
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

try {
  const re261 = f26(100)
  console.log(re261)
  const re262 = f26(-100)
  console.log(re262)
} catch(e) {
  console.log(e.message)
}