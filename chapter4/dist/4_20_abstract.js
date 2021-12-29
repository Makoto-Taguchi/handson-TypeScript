var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School20;
(function (School20) {
    School20["junior"] = "junior";
    School20["juniorHigh"] = "juniorHigh";
    School20["high"] = "high";
    School20["other"] = "other";
})(School20 || (School20 = {}));
var Human20 = /** @class */ (function () {
    function Human20() {
    }
    return Human20;
}());
var Person20 = /** @class */ (function (_super) {
    __extends(Person20, _super);
    function Person20(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        var _this = _super.call(this) || this;
        _this.name = 'no-name';
        _this.name = name;
        _this.mail = mail;
        _this.age = age;
        return _this;
    }
    Person20.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person20;
}(Human20));
var Student20 = /** @class */ (function (_super) {
    __extends(Student20, _super);
    function Student20(name, school, grade) {
        var _this = _super.call(this) || this;
        _this.name = 'no-name';
        _this.name = name;
        _this.school = school;
        _this.grade = grade;
        return _this;
    }
    Student20.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + ' school :' + gd + ' grade)');
    };
    return Student20;
}(Human20));
var taro20 = new Person20('taro', 'taro@mail', 40);
var jiro20 = new Person20('jiro', 'jiro@mail', 34);
var hanako20 = new Student20('hanako', School20.high);
var sachiko20 = new Student20('sachiko', School20.junior, 10);
var data20 = [taro20, jiro20, hanako20, sachiko20];
for (var _i = 0, data20_1 = data20; _i < data20_1.length; _i++) {
    var item = data20_1[_i];
    item.print();
}
var Employee20 = /** @class */ (function () {
    function Employee20(nm, cm, bth) {
        this.name = 'no-name';
        this.company = 'no-company';
        this.birth = new Date();
        this.name = nm;
        this.company = cm;
        this.birth = bth;
    }
    Employee20.prototype.print = function () {
        console.log(this.name + '([' + this.company + '], ' + this.birth + ')');
    };
    return Employee20;
}());
var makoto20 = new Employee20('makoto', 'Intel.Inc', new Date('2095/01/17'));
makoto20.print();
