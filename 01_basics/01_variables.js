const accountId = 144553
let accountEmail = "vaish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState //if no value assigned, by defualt it becomes undefined

// accountId = 2 // Not allowed

/*
Prefer not to use var
beacuase of issue in block scope and functional scope
*/

accountEmail = "vg@gmail.com"
accountPassword = "00000"
accountCity = "Delhi"

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])