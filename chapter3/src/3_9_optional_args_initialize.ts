function printPerson9(name:string = "no-name", age:number = -1):void {
  // const nameval = name ? name : "no-name"
  // const ageval = age ? String(age) : '-'
  console.log('Name:' + name + '(' + age + ')')
}

printPerson9("taro", 39)
printPerson9("hanako")
printPerson9()