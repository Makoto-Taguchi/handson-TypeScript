type person7 = {name:{first:string, second:string}, age:number}

const ob7:person7 = {name:{first:'taro', second:'yamada'}, age:39}
const {name:{first, second}, age} = ob7
console.log(first + "-" + second + "::" + age)
