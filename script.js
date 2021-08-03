'use strict'
/* ДЗ 2
let num = 266219; 
let res = 1;

while (num>0){
    res*=num%10;
    num=Math.floor(num/10);
}

console.log(res);

res**=3;

res=res.toString();
console.log(typeof res);
console.log('Первая цифра ',res[0]);
console.log('Вторая цифра ',res[1]);
*/

//ДЗ 3
let lang = prompt('Введите язык ru или en?');
//a
if (lang === 'ru') {
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else {
if (lang ==='en') {
    console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    console.log('Вы сделали неправильный ввод, повторите попытку');
}
}


//b
let lang1 = prompt('Введите язык ru или en?');
switch (lang1) {
    case ('ru'):
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case ('en'):
        console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('Вы сделали неправильный ввод, повторите попытку');
}


//c
let lang2=[
    ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['Monday, tuesday, wednesday, thursday, friday, saturday, sunday'],
    ['Вы сделали неправильный ввод, повторите попытку']
]
let choose = prompt('Введите язык ru или en?');
(choose==='ru')?console.log(lang2[0]):
(choose==='en')?console.log(lang2[1]):
console.log(lang2[2]);


//2
let namePerson = prompt('Введите имя');

(namePerson==='Артем')?console.log('Директор'):
(namePerson==='Максим')?console.log('Преподаватель'):
console.log('Студент');
