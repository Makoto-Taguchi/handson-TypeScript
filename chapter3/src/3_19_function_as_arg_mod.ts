const f19 = (n:number, farg19:(n:number)=>number|string):void=> {
  let res = farg19(n)
  console.log("Result:" + res)
}

const double19 = (n:number):number => n * 2
const word19 = (n:number):string => {
  const w =['○', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const s = String(n)
  let res:string[] = []
  for(let i = 0; i <= s.length; i++) {
    let c = s.charAt(i)
    res.push(w[Number(c)])
  }
  return res.join('')
}

const num19 = 1230
f19(num19, double19)
f19(num19, word19)
