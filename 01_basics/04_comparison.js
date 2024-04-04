// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true
// equality check == and comparison <,>,<=,>= works differently
// comparison convert null to a number i.e. 0

console.log(undefined > 0)  //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

// === strict check (chechks values wih datatypes as well)
console.log("2" == 2)   //true
console.log("2" === 2)  //false as strict check doesn't perform conversion of datatypes
