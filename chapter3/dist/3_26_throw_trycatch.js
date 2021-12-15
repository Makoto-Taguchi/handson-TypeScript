var f26 = function (n) {
    if (n < 0) {
        throw Error("負の値です");
    }
    var total = 0;
    for (var i_1 = 0; i_1 <= n; i_1++) {
        total += i_1;
    }
    return total;
};
try {
    var re261 = f26(100);
    console.log(re261);
    var re262 = f26(-100);
    console.log(re262);
}
catch (e) {
    console.log(e.message);
}
