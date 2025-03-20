//V8 is a high-performance JavaScript and WebAssembly engine: developed by Google. 
//V8 implements ECMAScript and WebAssembly standards.  
//It's open-source and written in C++
//V8 is used in Google Chrome and other Chromium-based browsers, as well as in the Node.js runtime system.
//V8 implements ECMAScript and WebAssembly standards.  
/*
Browser                     Name of Javascript Engine

Google Chrome              	V8
Edge (Internet Explorer)	Chakra (A distinctive feature of the engine is that it JIT compiles scripts on a separate CPU core, parallel to the web browser.)
Mozilla Firefox	            Spider Monkey (SpiderMonkey is the first JavaScript engine)
Safari 	                    Javascript Core Webkit (WebKit is developed by Apple and used in its Safari web browser, as well as all iOS web browsers)

*/

const accountId=12345  //can't be changed
let accountName="Manas" //let is changeable inside a scope 
var accountEmail="abc@1234.com" //var can be changed outside the scope

console.log(accountId) //Gives the output like cout 

console.table([accountId,accountName,accountEmail]) //gives the output in form of table