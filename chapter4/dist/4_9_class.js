var Person9 = /** @class */ (function () {
    function Person9() {
        this.name = 'no-name';
    }
    Person9.prototype.print = function () {
        var ml = this.mail ? this.mail : 'no-mail';
        var ag = this.age ? this.age : -1;
        console.log(this.name + '(' + ml + ',' + ag + ')');
    };
    return Person9;
}());
var taro9 = new Person9();
taro9.name = 'taro';
taro9.mail = 'taro@mail.com';
taro9.age = 39;
taro9.print();
