var ob1_8 = {
    name: 'taro',
    age: 39,
    print: function () {
        console.log(this.name + ':' + this.age);
    }
};
var ob2_8 = {
    name: 'hanako',
    mail: 'hanako@flower',
    print: function () {
        console.log(this.name + ':' + this.mail);
    }
};
ob1_8.print();
ob2_8.print();
