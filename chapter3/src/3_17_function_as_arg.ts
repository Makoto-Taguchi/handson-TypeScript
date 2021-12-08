const f17  = (n:number, f17arg:(n:number)=>number|string):void => {
  let res = f17arg(n)
  console.log("Result:" + res)
}

const double = (n:number):number => n * 2
const total17 = (n:number):number => {
  let total = 0
  for(let i = 1; i <= n; i++)
    total += i
  return total
}

const num = 100
f17(num, double)
f17(num, total17)
