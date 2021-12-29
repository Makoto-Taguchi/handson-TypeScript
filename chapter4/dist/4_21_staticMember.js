var StaticHuman21 = /** @class */ (function () {
    function StaticHuman21() {
    }
    StaticHuman21.set = function (nm, ag) {
        this.fullName = nm;
        this.age = ag;
    };
    StaticHuman21.print = function () {
        console.log(this.fullName + '(' + this.age + ')');
    };
    return StaticHuman21;
}());
StaticHuman21.set('taro', 39);
StaticHuman21.print();
