var janken;
(function (janken) {
    janken[janken["goo"] = 0] = "goo";
    janken[janken["choki"] = 1] = "choki";
    janken[janken["paa"] = 2] = "paa";
})(janken || (janken = {}));
var you = janken.goo;
switch (you) {
    case janken.goo:
        console.log('あいこです');
        break;
    case janken.choki:
        console.log('あなたの勝ち');
        break;
    case janken.paa:
        console.log('あなたの負け');
        break;
}
