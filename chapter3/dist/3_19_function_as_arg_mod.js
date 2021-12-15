var f19 = function (n, farg19) {
    var res = farg19(n);
    console.log("Result:" + res);
};
var double19 = function (n) { return n * 2; };
var word19 = function (n) {
    var w = ['○', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var s = String(n);
    var res = [];
    for (var i_1 = 0; i_1 <= s.length; i_1++) {
        var c = s.charAt(i_1);
        res.push(w[Number(c)]);
    }
    return res.join('');
};
var num19 = 1230;
f19(num19, double19);
f19(num19, word19);
