var School18;
(function (School18) {
    School18["junior"] = "junior";
    School18["juniorHigh"] = "juniorHigh";
    School18["high"] = "high";
    School18["other"] = "other";
})(School18 || (School18 = {}));
var Person18 = /** @class */ (function () {
    function Person18(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    Person18.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person18;
}());
var Student18 = /** @class */ (function () {
    function Student18(name, school, grade) {
        this.name = 'no-name';
        this.name = name;
        this.school = school;
        this.grade = grade;
    }
    Student18.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)');
    };
    return Student18;
}());
var taro18 = new Person18('taro', 'taro@mail', 40);
var jiro18 = new Person18('jiro', 'jiro@mail', 34);
var hanako18 = new Student18('hanako');
var sachiko18 = new Student18('sachiko', School18.junior, 10);
var data18 = [taro18, jiro18, hanako18, sachiko18];
for (var _i = 0, data18_1 = data18; _i < data18_1.length; _i++) {
    var item = data18_1[_i];
    item.print();
}
