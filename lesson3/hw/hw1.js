//
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// let strings = ['a', 'b', 'c', 'd', 'e'];
// console.log(strings);
// console.log(strings[0]);
// console.log(strings[1]);
// console.log(strings[2]);
// console.log(strings[3]);
// console.log(strings[4]);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 100;
// arr[1] = 'asdasd';
// arr[2] = 'asdasd';
// arr[3] = 'asdasd';
// arr[4] = 'asdasd';
// arr[5] = 'asdasd';

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`);
//     document.write('ashdashdfhgf');
//     document.write(`</div>`);
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`);
//     document.write('index ' + i);
//     document.write(`</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>hello</h1>')
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>hello ${i + 1}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log(num);
// }

// for (const num of nums) {
//     console.log(num);
// }

// let i = 0;
// while (i < nums.length) {
//     let number = nums[i];
//     console.log(number);
//     i++;
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві
// елементи
//
// let mix = [1, 2, 3, 'asd', true, false, '123'];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'boolean') {
//         console.log(mixItem);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові
// елементи
//
// let mix = [1, 2, 3, 'asd', true, false, '123'];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'number') {
//         console.log(mixItem);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові
// елементи
//
// let mix = [1, 2, 3, 'asd', true, false, '123'];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'string') {
//         console.log(mixItem);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
//
// let mix = [1, 2, 3, 'asd', true, false, '123'];

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(`${i}`)
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
