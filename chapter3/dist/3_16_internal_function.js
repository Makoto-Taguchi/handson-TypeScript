var f16 = function (n) {
    var inF16 = function (n) {
        console.log("value:" + n);
    };
    var total = 0;
    for (var i_1 = 1; i_1 <= n; i_1++) {
        total += i_1;
        inF16(total);
    }
};
f16(10);
