/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

let string = prompt('Введите строку');
let result = '';
for(let i = string.length-1; i >= 0; i--) {
  result += string[i];
}
console.log(result);
