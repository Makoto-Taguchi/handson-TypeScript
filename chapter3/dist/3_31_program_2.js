console.log("Node path = " + process.argv[0]);
console.log("script file path = " + process.argv[1]);
var data31 = [];
for (var i_1 = 2; i_1 < process.argv.length; i_1++) {
    data31.push(Number(process.argv[i_1]));
}
console.log('parameters:' + data31);
var f31 = aggregate();
for (var _i = 0, data31_1 = data31; _i < data31_1.length; _i++) {
    var item = data31_1[_i];
    var res = f31(item);
    console.log(res);
}
function aggregate() {
    var total = 0;
    var totalp = 0;
    var totalt = 0;
    return function (n) {
        total += n;
        var tax = Math.floor(n - n / 1.1);
        totalp += n - tax;
        totalt += tax;
        return [n, tax, total, totalp, totalt];
    };
}
