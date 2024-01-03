//stack and heap memory

//stack stores Primitive datatypes
//heap stores non-Primitive datatypes

let nameOne = "pavan"
let nameTwo = nameOne

nameTwo = "swayam"

console.log(nameOne)
console.log(nameTwo) //output is swayam and nameOne still remains same

//but see how value changes in non-primitive types
let userOne = {
    email: "pavan@gmail.com",
    upi: "user@pay"
}

let userTwo = userOne

userTwo.email = "swayam@gmail.com" //this changes email in userOne as well
//cz values are passed by reference

console.log(userOne)