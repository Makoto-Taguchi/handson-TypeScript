function printPerson(name, age) {
    var nameval = name ? name : "no-name";
    var ageval = age ? String(age) : '-';
    console.log('Name:' + nameval + '(' + ageval + ')');
}
printPerson("taro", 39);
printPerson("hanako");
printPerson();
