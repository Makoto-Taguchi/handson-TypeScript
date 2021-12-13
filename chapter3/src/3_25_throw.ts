const f25 = (n:number):number => {
  if(n < 0) {
    throw Error("負の数です")
  }
  let total = 0
  for (let i = 1;i <= n ; i++){
    total += 1
  }
  return total
}

let re251 = f25(100)
console.log(re251)
let re252 = f25(-100)
console.log(re252)