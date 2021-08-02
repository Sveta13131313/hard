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
if (lang == 'ru') {
    alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else {
if (lang =='en') {
    alert('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    alert('Вы сделали неправильный ввод, повторите попытку');
}
}


//b
let lang1 = prompt('Введите язык ru или en?');
switch (lang1) {
    case ('ru'):
        alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case ('en'):
        alert('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        alert('Вы сделали неправильный ввод, повторите попытку');
}


//c
let lang2=[
    ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['Monday, tuesday, wednesday, thursday, friday, saturday, sunday'],
    ['Вы сделали неправильный ввод, повторите попытку']
]
let choose = prompt('Введите язык ru или en?');
(choose=='ru')?alert(lang2[0]):
(choose=='en')?alert(lang2[1]):
alert(lang2[2]);


//2
let namePerson = prompt('Введите имя');

(namePerson=='Артем')?console.log('Директор'):
(namePerson=='Максим')?console.log('Преподаватель'):
console.log('Студент');
