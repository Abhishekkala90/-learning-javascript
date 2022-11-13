let num=[1,2,3,4,5];//reduce() take two argument unlike map() and filter which take one argument.

//suppose we want the sum of the array.
// let sum=0;
// for(let i=0;i<num.length;i++)
// {
//     sum+=num[i];
// }
// console.log(sum);
// similar to this using reduce()
let sum=num.reduce(function(sum,n){
    return sum+n;
},0);
console.log(sum);
//using arrow function.
let sumarray=num.reduce((sum,n)=>sum+n,0);
console.log(sumarray);