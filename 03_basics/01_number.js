const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 234.97
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//***************** Maths *****************//

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(5.9));
console.log(Math.ceil(4.9));
console.log(Math.floor(3.8));
console.log(Math.min(3, 7, 8, 5, 2, 1));
console.log(Math.max(5, 7, 8, 9, 0));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
