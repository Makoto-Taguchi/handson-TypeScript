var f25 = function (n) {
    if (n < 0) {
        throw Error("負の数です");
    }
    var total = 0;
    for (var i_1 = 1; i_1 <= n; i_1++) {
        total += 1;
    }
    return total;
};
var re251 = f25(100);
console.log(re251);
var re252 = f25(-100);
console.log(re252);
