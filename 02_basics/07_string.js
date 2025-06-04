const name = "hitesh"
const repoCount = 79

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newString1 = "  hitesh  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh&20choudhary"

console.log(url.replace('&20', '-'));
console.log(url.includes("hitesh"));

console.log(gameName.split('-'));
