var Person11 = /** @class */ (function () {
    function Person11(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person11.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person11;
}());
var taro11 = new Person11('taro', 'taro@mail', 39);
var hanako11 = new Person11('hanako', 'hanako@flower');
console.log(taro11 instanceof Person11
    === hanako11 instanceof Person11 === true);
console.log(taro11.constructor.name);
console.log(hanako11.constructor.name);
console.log(Person11.name);
