const accountID = 13342
let accountEmail = "pavan@gmail.com"
var accountPassword = "123"
accCity = "Mumbai" //we can declare variable like this as well but we should not
let accState //value of this will be undefined

//accountID = 2 //this is not allowed as it is declared as const
accountEmail = "shubham@gmail.com"
accountPassword = "212"
accCity = "Pune"

console.log(accountID); 
console.log(accountEmail);
console.table([accountEmail, accountPassword, accCity,accState])

/*
 var and let both are used for declaring variables
 but prefer not to use var because of issue in block scope 
 and functional scope
*/