//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить 
//есть ли в обьекте определенный ключ и если есть вывести в консоль **true**
const check = "age";

const obj = {
    name: "Kate",
    age: 30
}

for (const objKey in obj) {
    if(check == objKey) {
        console.log(true);
    } 
}