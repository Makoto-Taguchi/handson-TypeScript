var f17 = function (n, f17arg) {
    var res = f17arg(n);
    console.log("Result:" + res);
};
var double = function (n) { return n * 2; };
var total17 = function (n) {
    var total = 0;
    for (var i = 1; i <= n; i++)
        total += i;
    return total;
};
var num = 100;
f17(num, double);
f17(num, total17);
