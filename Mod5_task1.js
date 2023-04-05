/* Задание 1.
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку 
для этого значения. */

let value = prompt('Введите значение')
if (typeof +value !== 'number') {
  console.log('Упс, кажется, вы ошиблись');
} else if (isNaN(+value)) {
  console.log('Ошибка, введено НЕ ЧИСЛО');
} else if (value % 2 === 0) {
  console.log('Число принадлежит к множеству Number и оно чётное');
} else {
  console.log('Число принадлежит к множеству Number и оно нечётное');
}
