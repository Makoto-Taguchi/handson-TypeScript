var f16 = function (n) {
    var inF16 = function (n) {
        console.log("value:" + n);
    };
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
        inF16(total);
    }
};
f16(10);
