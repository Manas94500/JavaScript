//Type of datatye

//Primitive(7):-string,number,boolean,bigInt,symbol,null,undefined
let a="abc"
let b=100
let c=100.54
let d=true
let e=74892472797239089372n
let f=Symbol("123")
let i=Symbol("123")
console.log(f==i)
let j=null
let k;
console.table([typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof j,typeof k])


//Non Primitive(3):-Array[],Object{},function(){}
let arr=[1,2,3,4,5,6]
let abc={
    name:"Raj",
    age:24
}
let fun=function(x){
    console.log("This is a function")
}
console.log(fun())
console.table([arr,abc])

//+++++++++++++++++++Stack(Primitive) and Heap(Non-Primitive)+++++++++++++++++++++++++++++
let id1=4
let id2=id1;
id2=43;
console.log(id1)
console.log(id2)

let user={
    name:"Aman",
    age:24
}

let user1=user
user1.name="Rajat"
console.log(user.name)