type name2 = string;
type mail2 = string;
type age2 = number;
type person = [name2, mail2, age2];

const taro:person = ['taro', 'taro@yamada', 39]
const hanako:person = ['hanako', 'hanako@flower', 29]
const sachiko:person = ['sachiko', 'sachiko@happy', 35]

const data2:person[] = [taro, hanako, sachiko]

for(let item of data) {
  console.log(item)
}