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
var Person12 = /** @class */ (function () {
    function Person12(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person12.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person12;
}());
var School;
(function (School) {
    School["junior"] = "junior";
    School["juniorHigh"] = "juniorHigh";
    School["high"] = "high";
    School["other"] = "other";
})(School || (School = {}));
var Student12 = /** @class */ (function (_super) {
    __extends(Student12, _super);
    function Student12(name, school, grade) {
        var _this = _super.call(this, name) || this;
        _this.school = school;
        _this.grade = grade;
        switch (school) {
            case School.junior:
                _this.age = 6 + _this.grade;
                break;
            case School.juniorHigh:
                _this.age = 12 + _this.grade;
                break;
            case School.high:
                _this.age = 15 + _this.grade;
                break;
            default:
                _this.age = -1;
        }
        return _this;
    }
    return Student12;
}(Person12));
var taro12 = new Person12('taro', 'taro@yamada', 39);
var hanako12 = new Student12('hanako', School.high, 2);
taro12.print();
hanako12.print();
