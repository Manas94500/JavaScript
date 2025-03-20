let num = "33"

console.log(typeof num)
console.log(typeof (num))//this also works

let temp = Number(num)//typecasting
console.log(typeof temp)

let temp2 = Number(null) //converting null to number
console.log(temp2)//this gives 0 and it is a draback of js because it does not do strict checking which is done in typescript

let temp3=Number('33abc')//string to number is NaN(not a number) which is also a drawback
console.log(temp3)

let temp4=Number("Aman")
console.log(temp4) //This is also converted as NaN

let tempBool=Boolean("Aman")
console.log(tempBool)
//0=>false ; 1=>true
//""=>false
//"Aman"=>true

let temp5=String("33")
console.log(temp5)


/*************************************Operations*************************************/
console.log(1+1)//addition
console.log(1-2)//sub
console.log(2*1)//mul
console.log(2**3)//2 to the power 3
console.log(3/2)//division
console.log(2%3)//remindar

let str1="hello"
let str2="Buddy"
console.log(str1+str2)//concatination

console.log("1"+2)//output=>12
console.log(1+"2")//output=>12
console.log(1+3+"2")//output=>42  if string is in last first conversion will be applied then it will be added to the string defined in ecma toPrimitive section
console.log("1"+2+2)//output=>122  if string is first then everything will be treated as string defined in ecma toPrimitive section

let tr=true
console.log(+tr)//gives output=> 1
console.log(tr)//gives output=> true