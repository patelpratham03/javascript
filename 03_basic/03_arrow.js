const user = {
    username:"Pratham",
    price : 450,

    welcomemessage : function (){
        console.log(`${this.username} welcome`);
        console.log(this);
        
    }
}
user.welcomemessage()
user.username = "hetvi"
user.welcomemessage()
console.log("empty:",this);


function chai(){
    const username = "patel"
    console.log("In function :",this.username);
    console.log(this);
    
    
}
chai()
// arrow function
const arrow = () => {
    let a=10
    console.log(this);
    
    console.log(this.a);
    console.log("arrow",this);
}
arrow()

const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(4,8));

const addthree = (n1,n2,n3) => n1+n2+n3
console.log(addthree(45,20,1));
const addfour = (n1,n2,n3,n4) => (n1+n2+n3+n4)
console.log(addfour(45,20,1,4));
