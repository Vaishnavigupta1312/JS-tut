const name= "Vaishnavi"
const repoCount= 14

// console.log(name + repoCount + " Value")

console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`)

const gamename = new String('Veer Yodhaa prayas')

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(5))
console.log(gamename.indexOf('e'))

const newString = gamename.substring(1,6)  //[start,end)
console.log(newString)

const anotherString= gamename.slice(2,5) //[start.end)
console.log(anotherString)

const newStringOne = "   hello   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Vaishnavi%20Gupta"
console.log(url.replace('%20', '-'))

console.log(url.includes('Gupta'))

console.log(gamename.split(' '))
