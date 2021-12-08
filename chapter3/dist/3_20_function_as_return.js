var f20 = function (tax) {
    return function (n) { return n * (1 + tax); };
};
var f1 = f20(0.1);
var f2 = f20(0.08);
var price = 123400;
console.log(f1(price));
console.log(f2(price));
