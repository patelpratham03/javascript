function myfun(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");    
}
myfun()
myfun()

function addTwoNumber(n1,n2){
    let result = n1+n2
    return result;
}
const n3 = addTwoNumber(4,5)



console.log("Result",n3);


function addCart(var1,var2,var3,...num1){  //in parameter offunction if we use like ... three dots thet's called rest and for ... they also callled a spred
    console.log(num1);
    console.log(var1,var2,var3);
    
}
addCart(450,100,500,63,45,452,8,9,40);

const user = {
    username:"Patel",
    age:51
}
function callanyObject(anyobject){
    console.log(`Username is ${anyobject.username} and that age is ${anyobject.age}`);
}
callanyObject(user);

const arr1 = [45,82,89,41,25,10];
function callarray(array){
    console.log(`my array is ${array[2]}`);
    
}
callarray(arr1);


