let a=10;
const b=20;
var c=50;
console.log(a);
console.log(b);
console.log(c);
//b=50;
a=100
console.log(a);
{
    let a=15
    console.log(a);
    
}


function one(){
    const username="Pratham"
    function two(){
        const name="patel"
        console.log(username)
    }
    //console.log(name);
 two()
}
one()


function one(num){
    return num + 1
}
console.log("one :",one(10));

const addtwo = function(num){
    return num+1
}
console.log("Two :",addtwo(20))