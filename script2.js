// const ob= require('./file1.js')
// for(var i=0;i<ob.length;i++){
//         console.log(ob[i]);
//     }
/*const fig=require("figlet");

fig("i love u anisha", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});*/
//.. example for imprt and export
import {sum} from "./math.js";
console.log(sum(4,9));
//...//
//example of import,pehle iske liye random-words intall kiya by npm and then 
// import { generate } from "random-words";

// console.log(generate()); // Outputs: "acryon"