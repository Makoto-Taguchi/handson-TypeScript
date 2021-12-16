type person5 = {name:string, age:number}

function setData(ob:person5, n:string, a:number):person5 {
  ob.name = n
  ob.age = a
  return ob
}

const ob1:person5 = {name: 'taro', age: 39}
const ob2:person5 = setData(ob1, 'hanako', 28)

console.log(ob1)
console.log(ob2)