function printPerson(id, name, age) {
    switch (typeof (id)) {
        case 'string':
            console.log('your id is "' + id + '".');
            break;
        case 'number':
            console.log('No.' + id);
            break;
        default:
            console.log('wrong id...');
    }
    console.log('Name:' + name + '(' + age + ')');
}
printPerson(10, "taro", 39);
printPerson('flower', "hanako", 28);
