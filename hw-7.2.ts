/**Дан массив:

```javascript
    const numbers = [5, 43, 63, 23, 90]
```

Удалите все элементы в массиве и выведите в консоль полученный результат. */



const numbers = [5, 43, 63, 23, 90]
const len = numbers.length;
for(let i=0; i < len; i++)
{
    numbers.shift();
    console.log(numbers)
}