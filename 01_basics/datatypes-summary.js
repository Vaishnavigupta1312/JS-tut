// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Seema" 

const score = 100
const scoreValue = 100.3   //no concept of float or double

const isLoggedIn = false;
const outsideTemp = null
let usrEmail;   //undefined

const id = Symbol('123')
const anotherId  = Symbol('123')
console.log(id === anotherId)

const bigNumber = 34554526365636262n

// Non-primitive or Reference type

// Array, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"]; //array

// objects
let myObj = {
    name: "Vaishnavi",
    age: 21,
}
//functions
const myFunction = function(){
    console.log("Hello World")
}

myFunction()

console.log(typeof bigNumber)  //bigint
console.log(typeof myObj)      //object
console.log(typeof myFunction) //function
console.log(typeof heroes)     //object


// **************************************************************

// Stack Memory (Primitive), Heap Memory (Non-Primitive)

// in stack copies are used 
let myName = "Vaishnavi"

let nickname = myName
nickname = "Vaish"

console.log(myName)
console.log(nickname)

// in heap actual reference is used, so no copy is formed and original data is modified.
let userOne = {
    email: "vaish@gmail.com",
    upi: "user@ypl"
}

let userTwo = userOne
userTwo.upi= "paisenhih@bhagja"

console.log(userOne)
console.log(userTwo)


