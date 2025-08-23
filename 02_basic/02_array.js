const ar1 = ["Hye","Bye","Heelo"]
const ar2 = ["what","why","who"]
console.log(ar1.concat(ar2)); // concat
const narr = [...ar1,...ar2] // spread
console.log(narr);
ar1.push(ar2)
console.log(ar1)
console.log(ar1[3][0]);
const ar3 = [1,25,[45,4,2,5,[4,8,1]]]
console.log(ar3.flat(Infinity));
console.log(Array.from("Pratham"));
const n1=100
const n2=100
const n3=100
console.log(Array.of(n1,n2,n3));






