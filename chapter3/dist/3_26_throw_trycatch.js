var f26 = function (n) {
    if (n < 0) {
        throw Error("負の値です");
    }
    var total = 0;
    for (var i = 0; i <= n; i++) {
        total += i;
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
