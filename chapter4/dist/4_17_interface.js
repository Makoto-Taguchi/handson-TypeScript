var School17;
(function (School17) {
    School17["junior"] = "junior";
    School17["juniorHigh"] = "juniorHigh";
    School17["high"] = "high";
    School17["other"] = "other";
})(School17 || (School17 = {}));
var Person17 = /** @class */ (function () {
    function Person17(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    Person17.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person17;
}());
var Student17 = /** @class */ (function () {
    function Student17(name, school, grade) {
        this.name = 'no-name';
        this.name = name;
        this.school = school;
        this.grade = grade;
    }
    Student17.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)');
    };
    return Student17;
}());
var taro17 = new Person17('taro', 'taro@mail', 40);
taro17.print();
// const hanako17 = new Student17('hanako', School17.high, 2)
var hanako17 = new Student17('hanako', School17.high);
hanako17.print();
