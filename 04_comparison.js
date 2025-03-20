//normal comparison using <,>,<=,>=,!=

console.log("2">1)//true it converts 2 to number


console.log(null>0)//false because null is converted to 0
console.log(null==0)//false because null is converted to 0 and == and comparison operator are treated differently
console.log(null>=0)//true


console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined>=0)//false

//=== is used for strict checking as it also comparea datatype
console.log("2"===2)//false