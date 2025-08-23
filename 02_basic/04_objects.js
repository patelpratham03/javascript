const siob = new Object()
const siob2 = {}
console.log(siob);
console.log(siob2);

siob2.id="123abc"
siob2.name="hye"
siob2.email="hye01@gmail.com"
console.log(siob2.id);

const objInobj = {
    fullname :{
        username :{
            name : "pratham",
            age : 20
        }
    }
}
console.log(objInobj.fullname.username.age);

const ob4 = {1: "a", 2: "b"}

const ob3 = {...objInobj,...siob2,...ob4}
console.log(ob3);
const ob5=Object.assign({},ob4,objInobj,siob2)
console.log(ob5);
console.log(Object.keys(siob2));
console.log(Object.values(ob5));


const cource = {
    name:"java",
    price:450,
    teacher:"pratham"
}

const {name} = cource
console.log(name);