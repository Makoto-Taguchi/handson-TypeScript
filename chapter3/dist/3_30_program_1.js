console.log("Node path = " + process.argv[0]);
console.log("script file path = " + process.argv[1]);
var data = [];
for (var i = 2; i < process.argv.length; i++) {
    data.push(Number(process.argv[i]));
}
console.log(data);
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    var res = primeFactor(item);
    console.log(item + '= ' + res);
}
function primeFactor(a) {
    var v = [];
    var x = a;
    var n = 2;
    while (x > n) {
        if (x % n == 0) {
            x = x / n;
            v.push(n);
        }
        else {
            n += n == 2 ? 1 : 2;
        }
    }
    v.push(x);
    return v;
}
