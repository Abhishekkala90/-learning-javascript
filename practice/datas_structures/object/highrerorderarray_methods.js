 function add(n1,n2)
{
 return n1+n2;   
}
console.log(add(7,8));// simple functions.
function calculater(operate,n1,n2){//Higher order function which returns function or receive them as arguments.
 //do something else, send notification.
 return operate(n1,n2)
}
function add(n1,n2){
    return n1+n2;
}
function sub(n1,n2){
    return n1-n2;
}function mul(n1,n2){
    return n1*n2;
}
function div(n1,n2){
    return n1/n2;
}
 console.log(calculater(div,6,7)); //taking function as an argument.