function setData(ob, n, a) {
    ob.name = n;
    ob.age = a;
    return ob;
}
var ob1 = { name: 'taro', age: 39 };
var ob2 = setData(ob1, 'hanako', 28);
console.log(ob1);
console.log(ob2);
