var sum = function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var i_1 = data_1[_a];
        total += i_1;
    }
    return total;
};
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 30, 40, 50));
console.log(sum(123, 456, 789));
