var myapp;
(function (myapp) {
    var MyData = /** @class */ (function () {
        function MyData() {
            this.people = [];
        }
        MyData.prototype.add = function (nm, ag) {
            this.people.push({ name: nm, age: ag });
        };
        MyData.prototype.print = function () {
            console.log('*** mydata ***\n' + this.getString());
        };
        MyData.prototype.getString = function () {
            var res = '[\n';
            for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
                var item = _a[_i];
                res += ' "' + item.name + ' (' + item.age + ')",\n';
            }
            return res + ']';
        };
        return MyData;
    }());
    myapp.MyData = MyData;
})(myapp || (myapp = {}));
var mydata = new myapp.MyData();
mydata.add('taro', 39);
mydata.add('hanako', 28);
mydata.add('sachiko', 17);
mydata.add('jiro', 6);
mydata.print();
