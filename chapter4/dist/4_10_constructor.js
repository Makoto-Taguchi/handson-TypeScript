var Person10 = /** @class */ (function () {
    function Person10(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person10.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person10;
}());
var taro10 = new Person10('taro', 'taro@mail', 39);
var hanako10 = new Person10('hanako', 'hanako@flower');
var sachiko10 = new Person10('sachiko');
taro10.print();
hanako10.print();
sachiko10.print();
