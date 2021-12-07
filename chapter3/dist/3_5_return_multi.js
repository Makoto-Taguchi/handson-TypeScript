function calcTax(price) {
    var p = price / 1.1;
    var t = price - p;
    return [p, t];
}
function printTax(price) {
    var _a = calcTax(price), pr = _a[0], tx = _a[1];
    console.log(price + "の本体価格は" + pr + ", 税額は" + tx);
}
printTax(2750);
printTax(3080);
