let a = 10
let b = 5

if(a > b){
    console.log("A nagyobb, mint B")
}
if(a < b){
    console.log("A kisebb, mint B")
}else{
    console.log("B nagyobb, mint A")
}

let text = (a > b) ? "A nagyobb, mint B" : "B nagyobb, mint A"
console.log(text)

let isMember = true; //false
let discount = isMember ? 0.2 : 0;

console.log(discount)