let myArr=[0,1,2,3,4,5,6,7,8]
let arr=new Array(1,2,3,"Harry")

//Array methods
arr.push(9)
arr.push(10)
arr.pop()
console.log(arr)

arr.unshift(9)//adds the value in front
console.log(arr)
arr.shift()//removes the value from front
console.log(arr.includes(10))//it returns true or false if it is present or not

console.log(arr.join())//converts the array to string and binds it

console.log("A " , myArr)
let sl=myArr.slice(1,3)//gives the array in the range
console.log(sl)
console.log("B " ,myArr)
let sp=myArr.splice(1,3)//it changes the array by removing the range
console.log(sp)
console.log("C ",myArr)