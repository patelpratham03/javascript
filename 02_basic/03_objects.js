const mysm = Symbol("key1")
console.log(typeof mysm);


const ob1 = {
    name:"Pratham",
    age:20,
    [mysm]:"key1",
    city:"Ahmedabad",
    workingDay:["Monday","Tuesday","Sunday"],
    "fullName":"Patel Pratham"
}
console.log(ob1.name);
console.log(ob1["fullName"]); // 2 type for call a objects key and value
console.log(ob1[mysm]); // when we use to symbol in objects to write like this
console.log(typeof mysm);
console.log(ob1);

ob1.city = "Surat"
console.log(ob1.city);
//Object.freeze(ob1)
ob1.name = "Rahul"
console.log(ob1);


// function

ob1.greatting = function(){
    console.log("hye from javascript");    
}
console.log(ob1.greatting);
console.log(ob1.greatting());


ob1.greattingTwo = function(){
    console.log(`hye from javascript ${this.fullName}`);    
}
console.log(ob1.greattingTwo());





