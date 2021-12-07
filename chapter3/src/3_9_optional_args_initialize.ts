function printPerson(name:string = "no-name", age:number = -1):void {
  // const nameval = name ? name : "no-name"
  // const ageval = age ? String(age) : '-'
  console.log('Name:' + name + '(' + age + ')')
}

printPerson("taro", 39)
printPerson("hanako")
printPerson()