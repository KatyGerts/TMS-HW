//  Task 1 💻
//Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, 
//до параметра, который мы в неё передаем. 
let sum =0;
function getSum(last:number): number {
    for(let i=1; i<=last; i++) {
       sum = sum + i;
    }
    return sum;
}
console.log(getSum(100));