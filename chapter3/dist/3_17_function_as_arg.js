var f17 = function (n, f17arg) {
    var res = f17arg(n);
    console.log("Result:" + res);
};
var double = function (n) { return n * 2; };
var total17 = function (n) {
    var total = 0;
    for (var i_1 = 1; i_1 <= n; i_1++)
        total += i_1;
    return total;
};
var num = 100;
f17(num, double);
f17(num, total17);
