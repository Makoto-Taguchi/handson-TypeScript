const f23 = (arr?:any[]):void => {
  let res = 'Array: '
  for (let i of arr) {
    res += String(i) + '\t'
  }
  console.log(res)
}

try {
  f23(['ok', 'NG'])
  f23()
  f23([10, 20, 30])
} catch(e) {
  console.log(e.message)
}