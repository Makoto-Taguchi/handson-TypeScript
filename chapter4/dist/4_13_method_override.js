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
var Person13 = /** @class */ (function () {
    function Person13(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person13.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person13;
}());
var School13;
(function (School13) {
    School13["junior"] = "junior";
    School13["juniorHigh"] = "juniorHigh";
    School13["high"] = "high";
    School13["other"] = "other";
})(School13 || (School13 = {}));
var Student13 = /** @class */ (function (_super) {
    __extends(Student13, _super);
    function Student13(name, school, grade) {
        var _this = _super.call(this, name) || this;
        _this.school = school;
        _this.grade = grade;
        switch (school) {
            case School13.junior:
                _this.age = 6 + _this.grade;
                break;
            case School13.juniorHigh:
                _this.age = 13 + _this.grade;
                break;
            case School13.high:
                _this.age = 15 + _this.grade;
                break;
            default:
                _this.age = -1;
        }
        return _this;
    }
    Student13.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        switch (this.grade) {
            case 1:
                gd += 'st';
                break;
            case 2:
                gd += 'nd';
                break;
            case 3:
                gd += 'rd';
                break;
            default: gd += 'th';
        }
        console.log(this.name + '(' + this.age + '歳 ' + this.school + ' school: ' + gd + ' grade)');
    };
    return Student13;
}(Person13));
var taro13 = new Person13('taro', 'taro@yamada', 39);
var hanako13 = new Student13('hanako', School13.high, 3);
taro13.print();
hanako13.print();
