function printPerson7(id:number | string, name:string, age:number):void {
  switch(typeof(id)) {
    case 'string':
      console.log('your id is "' + id + '".')
    break
    case 'number':
      console.log('No.'+ id)
    break
    default:
      console.log('wrong id...')
  }
  console.log('Name:' + name + '(' + age + ')')
}

printPerson7(10, "taro", 39)
printPerson7('flower', "hanako", 28)