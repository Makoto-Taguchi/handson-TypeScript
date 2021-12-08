function printPerson8(name, age) {
    var nameval = name ? name : "no-name";
    var ageval = age ? String(age) : '-';
    console.log('Name:' + nameval + '(' + ageval + ')');
}
printPerson8("taro", 39);
printPerson8("hanako");
printPerson8();
