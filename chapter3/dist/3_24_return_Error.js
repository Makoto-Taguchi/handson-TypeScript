var f24 = function (n) {
    if (n < 0) {
        return [n, Error("負の値です")];
    }
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return [total];
};
var _a = f24(100), res1 = _a[0], err1 = _a[1];
if (err1 == undefined)
    console.log(res1);
else
    console.log(err1);
var _b = f24(-100), res2 = _b[0], err2 = _b[1];
if (err2 == undefined)
    console.log(res2);
else
    console.log(err2);
