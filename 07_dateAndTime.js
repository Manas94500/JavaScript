//Date

let date = new Date()

console.log(date)//2025-03-21T18:57:42.620Z
console.log(date.toLocaleString())//22/03/2025, 00:27:42
console.log(date.toString())//Sat Mar 22 2025 00:27:42 GMT+0530 (India Standard Time)
console.log(date.toDateString())//Sat Mar 22 2025

let newdate=new Date(2023,0,22)//months start from zero in JS
console.log(newdate.toDateString())//Sun Jan 22 2023
let newDate1=new Date(2023,0,22,5,3)//months start from zero in JS
console.log(newDate1.toLocaleString())// 22/01/2023, 05:03:00

//for MM-DD-YYYY
let date2=new Date("01-14-2023")
console.log(date2.toLocaleString())// 14/01/2023, 00:00:00


//See more methods for time