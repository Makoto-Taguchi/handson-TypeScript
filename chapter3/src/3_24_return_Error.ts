const f24 = (n:number):[number, Error?] => {
  if(n < 0) {
    return [n, Error("負の値です")]
  }
  let total = 0
  for (let i = 1;i <= n;i++){
    total += i
  }
  return [total]
}

let [res1, err1] = f24(100)
if (err1 == undefined)
  console.log(res1)
else console.log(err1)

let [res2, err2] = f24(-100)
if (err2 == undefined)
  console.log(res2)
else console.log(err2)