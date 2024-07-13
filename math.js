/*const sum=(a,b)=>{
    return a+b;
}
const mul=(a,b)=>
    {
        return a*b;
    }
const obj={
    sum:sum(2,3),
    mul:mul(2,3),
    name:'John'
 // yaha koi bhi function hai toh sum,mul,name print hoga
}
//yaha par module.export ek object hoga agar kuchh na de toh empty object print hoga 
// module.exports;// yaha empty object print hoga 
// module.exports=123;
module.exports=obj;//abb obj export hua*/

// module.exports.sum=()=>{
//     return 4+5;
// }
// module.exports.name="kashish"
// module.exports=5;
// export=5; wrong
//...import and export ke case mai aise karenge
 export const sum=(a,b)=>{
   console.log(a+b)
}
