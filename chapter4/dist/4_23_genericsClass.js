var Data23 = /** @class */ (function () {
    function Data23() {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.data = item;
    }
    Data23.prototype.print = function () {
        if (this.data) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item);
            }
        }
        else {
            console.log('no data...');
        }
    };
    return Data23;
}());
var data1_23 = new Data23('one', 'two', 'three');
var data2_23 = new Data23(123, 456, 78, 90);
data1_23.print();
data2_23.print();
