// "1. Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function exponent(n,x)
{
    if(x==0)
    return 1;
    return n*exponent(n,x-1);
}
console.log(exponent(2,10));

// 2. Write a JavaScript program for binary search.
// Sample array: [0,1,2,3,4,5,6];
// console.log(l.br_search(5)) will return '5'
let array=  [0,1,2,3,4,5,6];
const binary=(array,n)=>
{
let lower=0;
let upper=array.length-1;
while(lower<=upper)
{
  
    if(n<lower ||n>upper)
    {
        return 'Number not found';
    }
    let middle=Math.floor((lower+upper)/2);
    if(n===array[middle])
    return middle;
    else if(n<array[middle])
    {
        upper=middle-1;
    }
    else if(n>array[middle])
    {
        lower=middle+1;
    }
}
}

console.log(binary(array,5));
