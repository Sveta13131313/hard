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