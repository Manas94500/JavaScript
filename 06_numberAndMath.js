const sum=100

const balance=new Number(200)

console.log(balance)//it returns the number with type

console.log(balance.toString())//it is now converted to string and all string operations can be performed
console.log(balance.toString().length)//string operation

//Numbers operations
const a=183
const b=183.899
const c=11183.899
console.log(a.toPrecision(4))//value 4 is passed to get 4 numbers it does not matter if it is decimal or have more than three it will convert it to exponentional
console.log(b.toPrecision(4))//rounded off
console.log(c.toPrecision(4))//exponential value

const d=1000000000
console.log(d.toLocaleString('en-IN'))//it converts the number in readable formate without 'en-IN' it will be in UK notation

console.table([Number.MIN_VALUE,Number.MIN_VALUE]) //Min and max values are also there

//++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++
console.log(Math.floor(4.9))
console.log(Math.ceil(4.2))
console.log(Math.abs(-4.9))
console.log(Math.floor(4.9))
console.log(Math.max(4,9,4,2,6,8))
console.log(Math.min(4,5,6,78,9))

console.log(Math.random())//gives number between 0-1
console.log(Math.ceil((Math.random()*10)+1))//gives number between 1-10

const min=10
const max=20
console.log(Math.random()*(max-min+1)+min)//this gives value max at 20 and min at 10