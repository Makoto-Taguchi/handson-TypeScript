var School19;
(function (School19) {
    School19["junior"] = "junior";
    School19["juniorHigh"] = "juniorHigh";
    School19["high"] = "high";
    School19["other"] = "other";
})(School19 || (School19 = {}));
var Person19 = /** @class */ (function () {
    function Person19(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    Person19.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person19;
}());
var Student19 = /** @class */ (function () {
    function Student19(name, school, grade) {
        this.name = 'no-name';
        this.name = name;
        this.school = school;
        this.grade = grade;
    }
    Student19.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)');
    };
    return Student19;
}());
var taro19 = new Person19('taro', 'taro@mail', 40);
var jiro19 = new Person19('jiro', 'jiro@mail', 34);
var hanako19 = new Student19('hanako', School19.high);
var sachiko19 = new Student19('sachiko', School19.junior, 10);
var data19 = [taro19, jiro19, hanako19, sachiko19];
for (var _i = 0, data19_1 = data19; _i < data19_1.length; _i++) {
    var item = data19_1[_i];
    item.print();
}
var Employee19 = /** @class */ (function () {
    function Employee19(nm, cm, bth) {
        this.name = 'no-name';
        this.company = 'no-company';
        this.birth = new Date();
        this.name = nm;
        this.company = cm;
        this.birth = bth;
    }
    Employee19.prototype.print = function () {
        console.log(this.name + '([' + this.company + '], ' + this.birth + ')');
    };
    return Employee19;
}());
var makoto19 = new Employee19('makoto', 'Intel.Inc', new Date('1995/01/17'));
makoto19.print();
