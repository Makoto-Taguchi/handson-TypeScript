function printPerson8(name?:string, age?:number):void {
  const nameval = name ? name : "no-name"
  const ageval = age ? String(age) : '-'
  console.log('Name:' + nameval + '(' + ageval + ')')
}

printPerson8("taro", 39)
printPerson8("hanako")
printPerson8()