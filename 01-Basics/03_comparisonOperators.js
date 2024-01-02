console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 2)
console.log(3 <= 2)
console.log(3 == 2)
console.log(3 != 2)

//note - comaprion should be between same datatypes
//different dataypes gives unpredictable results

//now lets look for the null
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true ...how????

/*
The reason is that an equality check == and comparisons
> < >= <= work differently
Comparisons convert null to a number ,treating it as a0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

//undefined ke liye bhi same upar logic applies but uske case sabhi values will be false

// === this is used for strict check ..like it will check value as well as data type also
console.log("2" === 2) //Now this will give output as false

