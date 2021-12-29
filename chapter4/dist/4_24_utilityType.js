var Person24 = /** @class */ (function () {
    function Person24(nm, ml, ag) {
        this.human = {
            name: nm,
            mail: ml,
            age: ag
        };
    }
    Person24.prototype.print = function () {
        console.log(this.human.name + '(' + this.human.age + '::' + this.human.mail + ')');
    };
    return Person24;
}());
var taro24 = new Person24('taro', 'taro@yamada', 39);
taro24.print();
