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

/*
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
*/
/*
const isNumber=function(n){
return !isNaN(parseFloat(n))&&isFinite(n)
};

const getString = function(){
    let str = prompt('Введите строку');
    while(isNumber(str)){
        console.log('Получена не строка!');
        str = prompt('Введите строку');
    }
    str=str.trim();

    if(str.length > 30) {
        str = str.substr(0, 30) + '...';
      }
      return console.log(str);
}


getString();
*/
/*
//Задание 5

//1
let arr = [];
for (let count = 0; count < 7; count++) {
    arr[count] = prompt('Введите многозначное число');
    if  ((arr[count][0]==2)||(arr[count][0]==4)){
        console.log(arr[count]);
    }
}



//2
for (let i = 1; i < 100; i++) {
    let flag = 1;
    for (let j = 2; (j <= i / 2) && (flag == 1); j = j + 1) {
        if (i % j == 0) {
            flag = 0;
        }
    }

    if (flag == 1) {
        console.log('Делители этого числа: 1  и ', i);
    }
}

*/
/*
//Задание 7
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let toDay = new Date().getDay() - 1;


    for (let i = 0; i < week.length; i++) {
        if (i === toDay) {
            if ( week[i] == 'Суббота') {
                document.write(`<p><b><i>${week[i]}</i></b></p>`);
            } else {
                document.write(`<p><b>${week[i]}</b></p>`);
            }
        } else if (week[i] == 'Воскресенье') {
            document.write(`<p><b><i>${week[i]}<i></b></p>`);
        } else {
            document.write(`<p>${week[i]}</p>`);
        }
    }
    console.log(week);

*/

//Задание 9
let toDay = new Date();
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let hForA=document.getElementById("hForA");
let hForB=document.getElementById("hForB");


let Month;
// Преобразуем месяца
switch (toDay.getMonth()) {
    case 0: Month = 'января'; break;
    case 1: Month = 'февраля'; break;
    case 2: Month = 'марта'; break;
    case 3: Month = 'апреля'; break;
    case 4: Month = 'мая'; break;
    case 5: Month = 'июня'; break;
    case 6: Month = 'июля'; break;
    case 7: Month = 'августа'; break;
    case 8: Month = 'сентября'; break;
    case 9: Month = 'октября'; break;
    case 10: Month = 'ноября'; break;
    case 11: Month = 'декабря'; break;
}

let a = function () {
    // Вывод
    if (toDay.getHours() == 1) {
        return ('Сегодня ' + days[toDay.getDay()] + ', ' + toDay.getDay() + ' ' + Month + ' ' + toDay.getFullYear() + ' года, ' + toDay.getHours() + ' час ' + toDay.getMinutes() + ' минут ' + toDay.getSeconds() + ' секунды');
    } else if (toDay.getHours() > 1 && toDay.getHours() < 5) {
        return ('Сегодня ' + days[toDay.getDay()] + ', ' + toDay.getDay() + ' ' + Month + ' ' + toDay.getFullYear() + ' года, ' + toDay.getHours() + ' часа ' + toDay.getMinutes() + ' минут ' + toDay.getSeconds() + ' секунды');
    }
    else if (toDay.getHours() > 4 || toDay.getHours() == 0) {
        return ('Сегодня ' + days[toDay.getDay()] + ', ' + toDay.getDay() + ' ' + Month + ' ' + toDay.getFullYear() + ' года, ' + toDay.getHours() + ' часов ' + toDay.getMinutes() + ' минут ' + toDay.getSeconds() + ' секунды');
    }

}

let b=function(){
    let hours=toDay.getHours();
    let munite=toDay.getMinutes();
    let second=toDay.getSeconds();
    let day=toDay.getDay();
    let month=toDay.getMonth();

    if(toDay.getHours()<10){
        hours='0'+toDay.getHours();
    }
    if(toDay.getMinutes()<10){
        munite='0'+toDay.getMinutes();
    }
    if(toDay.getSeconds()<10){
        second='0'+toDay.getSeconds();
    }
    if(toDay.getDay()<10){
        day='0'+toDay.getDay();
    }
    if(toDay.getMonth()<10){
        month='0'+toDay.getMonth();
    }

    return (day +  '.' + month + '.' + toDay.getFullYear() + ' - ' +  hours + ':' + munite + ':' + second);
}
setInterval(() => { 
    hForA.innerText=a();
    hForB.innerText=b();
}, 1000);






