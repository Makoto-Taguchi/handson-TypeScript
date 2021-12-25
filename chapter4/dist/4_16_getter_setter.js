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
var Person16 = /** @class */ (function () {
    function Person16(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name,
            this.mail = mail,
            this.age = age;
    }
    Person16.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person16;
}());
var School16;
(function (School16) {
    School16["junior"] = "junior";
    School16["juniorHigh"] = "juniorHigh";
    School16["high"] = "high";
    School16["other"] = "other";
})(School16 || (School16 = {}));
var Student16 = /** @class */ (function (_super) {
    __extends(Student16, _super);
    function Student16(name, school, grade) {
        var _this = _super.call(this, name) || this;
        _this.grade_num = -1;
        _this.gr_str = '';
        _this.school = school;
        _this.gradeN = grade;
        return _this;
    }
    Object.defineProperty(Student16.prototype, "gradeN", {
        get: function () {
            return this.grade_num;
        },
        set: function (n) {
            this.grade_num = n;
            this.grade = String(n);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student16.prototype, "grade", {
        get: function () {
            return this.gr_str;
        },
        set: function (pr) {
            var gd = pr;
            switch (this.gradeN) {
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
            this.gr_str = gd;
        },
        enumerable: false,
        configurable: true
    });
    Student16.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + 'school: ' + gd + ' grade)');
    };
    return Student16;
}(Person16));
var hanako16 = new Student16('hanako', School16.high, 2);
// hanako16.age = 28
hanako16.print();
