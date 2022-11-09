/*Используя метод **`find`** найдите в массиве первое четное число.

```javascript
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]*/

    const number1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
    const result = number1.find(el => el % 2 == 0);
    console.log(result);