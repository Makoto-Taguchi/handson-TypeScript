function getRnd27(values) {
    var r = Math.floor(Math.random() * values.length);
    return values[r];
}
var data1 = [0, 2, 4, 6, 8, 10];
var data2 = ['グー', 'チョキ', 'パー'];
var data3 = [true, false];
for (var i = 0; i < 10; i++) {
    var re1 = getRnd27(data1);
    var re2 = getRnd27(data2);
    var re3 = getRnd27(data3);
    var res = re1 + '(' + typeof (re1) + ')\t'
        + re2 + '(' + typeof (re2) + ')\t'
        + re3 + '(' + typeof (re3) + ')';
    console.log(res);
}
