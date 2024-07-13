//abb jo maths mai jo jiss import ki hai usse humne import karna hai 
/*const somevalue=require("./math")
console.log(somevalue);
for(var i=0;i<=5;i++){
    console.log("kashish");
}
const ar=process.argv;
for(var i=2;i<ar.length;i++){
    console.log(`hello dear ${ar[i]}`);
}*/
//write node file1.js 
const apple=require("./fruits/apple")
const ban=require("./fruits/banana")
const orange= require("./fruits/pear")
let ar=[apple,ban,orange]
// for(var i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }
module.exports=ar;