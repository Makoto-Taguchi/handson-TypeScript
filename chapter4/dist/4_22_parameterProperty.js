var Human22 = /** @class */ (function () {
    function Human22(name, age) {
        this.name = name;
        this.age = age;
    }
    Human22.prototype.print = function () {
        console.log(this.name + '(' + this.age + ')');
    };
    return Human22;
}());
var taro22 = new Human22('taro', 39);
taro22.print();
var hanako22 = new Human22('hanako', 20);
hanako22.print();
