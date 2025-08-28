const { use } = require("react");

const month=3
switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;       
    case 4:
        console.log("app");
        break;
    default:
        console.log("no");
        break;
        
        
}
const mon="march"
switch (mon){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;       
    case "app":
        console.log("app");
        break;
    default:
        console.log("no");
        break;   
}
// nullish coalescing operator (??). 
let var1;
var1=5 ?? 10
console.log(var1);
var1= null ?? 15
console.log(var1);
var1=undefined ?? 45
console.log(var1);
var1= null ?? undefined ?? 12 ?? 45
console.log(var1);

// turnary operator
//condition ? true : false





