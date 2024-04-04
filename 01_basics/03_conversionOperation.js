// let score = "33abc"
let score = undefined
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)  
 //NaN -> Not a Number in case of string or undefined, 0 in case of null or false,1 in case of true 

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// bool => 0/1

let isLoggedIn = "hello"

let boolIsLoggedin = Boolean(isLoggedIn)
// console.log(boolIsLoggedin);

// 1 => true
// 0 => false
// "" => false
// "kjjncl" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// **************************Operations******************************

let value =3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)  //2 raised to power 3
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " vaish"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)     //12
console.log(1 + "2")     //12
console.log("1" + "2")   //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

// refer to 7.Abstract Operations of ecma

console.log(3 + 4 * 5 % 3) //bad practice, impractical

console.log(+true)   //1
console.log(+"")  //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter1 = 100
let b1=gameCounter1++   //assign then increement
console.table([gameCounter1,b1])

let gameCounter2 = 100
let b2= ++gameCounter2   //increement then assign
console.table([gameCounter2,b2])
