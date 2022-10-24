//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита 
// который хочет получить клиент и верните результат переплаты по кредиту:
//+ процентная ставка в год — 17%,
//+ количество лет — 5.

function calculation(credit:number): number {
    let sum=0
    sum = credit * 0.17 * 5;
    return sum;
}

let credit = 50000;
let itog = calculation(credit);
console.log("Кредит: " + credit + ", Переплата: " + itog);


