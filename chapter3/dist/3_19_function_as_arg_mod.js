var f19 = function (n, farg19) {
    var res = farg19(n);
    console.log("Result:" + res);
};
var double19 = function (n) { return n * 2; };
var word19 = function (n) {
    var w = ['○', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var s = String(n);
    var res = [];
    for (var i = 0; i <= s.length; i++) {
        var c = s.charAt(i);
        res.push(w[Number(c)]);
    }
    return res.join('');
};
var num19 = 1230;
f19(num19, double19);
f19(num19, word19);
