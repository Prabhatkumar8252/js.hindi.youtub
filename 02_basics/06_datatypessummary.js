// How to store data in memory and access data on the basis of this two categorization...


// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234566')
const anotherId = Symbol('1234566')

console.log(typeof score);
console.log(id === anotherId);
console.log([score, scoreValue, isLoggedIn, outsideTemp, userEmail]);

const bigNumber = 135465768568678678678667n

//Refernce (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "prabhat",
    age : 21,
}

const myFunction = function()
{
    console.log("Hello world"); 
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);