function Person3(n:string, a:number): {name:string, age:number, print:()=>void} {
  return {
    name: n,
    age: a,
    print: function() {
      console.log(this.name + '(' + this.age + ')');
    }
  }
}

const taro3 = Person3("taro", 38)
const hana3 = Person3("hanako", 29)
taro3.print()
hana3.print()