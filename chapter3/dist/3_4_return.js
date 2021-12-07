function total(max) {
    var num = 0;
    for (var i = 1; i <= max; i++) {
        num += i;
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
