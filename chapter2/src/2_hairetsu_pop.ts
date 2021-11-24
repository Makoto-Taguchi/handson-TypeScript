let data1:any = [10, 20, 30, 40, 50]

console.log(data1)
for(let i = 0; i < data1.length; i++) {
  data1.pop()
  data1.unshift('shi')
  console.log(data1)
}
