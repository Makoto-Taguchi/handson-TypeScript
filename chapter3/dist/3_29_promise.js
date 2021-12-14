var f = function (n, d) {
    console.log("start:" + n);
    return new Promise(function (f) {
        var total = 0;
        for (var i = 1; i <= n; i++)
            total += i;
        setTimeout(function () {
            f(total);
        }, d);
    });
};
var cb = function (n) {
    console.log("result:" + n);
};
f(10, 300).then(cb);
f(100, 200).then(cb);
f(1000, 100).then(cb);
console.log("do something...");
