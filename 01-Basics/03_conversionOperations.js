let score = "33"

console.log(typeof score) //output is string

let valueNum = Number(score) //this will convert string to number

/*Instead of Number if we use String then it will convert to string
and if we use Boolean then it will convert it to true or false */

console.log(typeof valueNum)

//but now what if score = "33abc"
let score2 = "33abc"
let valueNum2 = Number(score2)
console.log(typeof valueNum2) //will show type as number but it should be string
console.log(valueNum2) //output is Nan

/* 
conversions
"33" => 33
"33abc" => NaN
true => 1, false => 0
*/ 