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
var Person14 = /** @class */ (function () {
    function Person14(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person14.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person14;
}());
var School14;
(function (School14) {
    School14["junior"] = "junior";
    School14["juniorHigh"] = "juniorHigh";
    School14["high"] = "high";
    School14["other"] = "other";
})(School14 || (School14 = {}));
var Student14 = /** @class */ (function (_super) {
    __extends(Student14, _super);
    function Student14(name, age, school, grade) {
        var _this = _super.call(this, name) || this;
        _this.school = school;
        _this.grade = grade;
        _this.age = age;
        switch (school) {
            case School14.junior:
                _this.age = 6 + _this.grade;
                break;
            case School14.juniorHigh:
                _this.age = 14 + _this.grade;
                break;
            case School14.high:
                _this.age = 15 + _this.grade;
                break;
            default:
                _this.age = -1;
        }
        return _this;
    }
    Student14.prototype.print = function () {
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
    return Student14;
}(Person14));
var taro14 = new Person14('taro', 'taro@yamada', 39);
var hanako14 = new Student14('hanako', 17, School14.high, 2);
// 以下二つはエラー
// hanako14.name = '花子'
// hanako14.mail = 'hanako@mail'
hanako14.age = 28;
taro14.print();
hanako14.print();
