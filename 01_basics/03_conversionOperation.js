// let score = "33abc"
let score = undefined
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)   //NaN -> Not a Number in case of string or undefined, 0 in case of null or false,
                             // 1 in case of true 

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// bool => 0/1

let isLoggedIn = "hello"

let boolIsLoggedin = Boolean(isLoggedIn)
console.log(boolIsLoggedin);

// 1 => true
// 0 => false
// "" => false
// "kjjncl" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)