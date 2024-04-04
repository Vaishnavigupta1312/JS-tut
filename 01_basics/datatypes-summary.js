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

const myFunction = function(){
    console.log("Hello World")
}

myFunction()

console.log(typeof bigNumber)  //bigint
console.log(typeof myObj)      //object
console.log(typeof myFunction) //function
console.log(typeof heroes)     //object