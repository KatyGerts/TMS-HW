/*Используя метод **`reduce`** получите сумму всех чисел массива.

```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]*/

    const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987] 
    let sum = 0;
    const result3 = fibonacci2.reduce((elprev,elcurr) => {
            return elprev + elcurr;
    });
    console.log(result3);