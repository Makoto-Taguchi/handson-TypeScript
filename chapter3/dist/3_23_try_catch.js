var f23 = function (arr) {
    var res = 'Array: ';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i_1 = arr_1[_i];
        res += String(i_1) + '\t';
    }
    console.log(res);
};
try {
    f23(['ok', 'NG']);
    f23();
    f23([10, 20, 30]);
}
catch (e) {
    console.log(e.message);
}
