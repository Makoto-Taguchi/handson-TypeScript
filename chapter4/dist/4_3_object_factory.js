function Person3(n, a) {
    return {
        name: n,
        age: a,
        print: function () {
            console.log(this.name + '(' + this.age + ')');
        }
    };
}
var taro3 = Person3("taro", 38);
var hana3 = Person3("hanako", 29);
taro3.print();
hana3.print();
