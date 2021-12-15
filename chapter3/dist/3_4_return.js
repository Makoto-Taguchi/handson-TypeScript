function total(max) {
    var num = 0;
    for (var i_1 = 1; i_1 <= max; i_1++) {
        num += i_1;
    }
    return num;
}
function printTotal(n) {
    var res = total(n);
    console.log(n + "までの合計" + res);
}
printTotal(123);
printTotal(1234);
printTotal(12345);
