function printPerson9(name, age) {
    if (name === void 0) { name = "no-name"; }
    if (age === void 0) { age = -1; }
    // const nameval = name ? name : "no-name"
    // const ageval = age ? String(age) : '-'
    console.log('Name:' + name + '(' + age + ')');
}
printPerson9("taro", 39);
printPerson9("hanako");
printPerson9();
