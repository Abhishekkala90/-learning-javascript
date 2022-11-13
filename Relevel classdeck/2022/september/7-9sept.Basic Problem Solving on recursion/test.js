// let result;
// let n1=0;
// let n=999;
// let n2=1;
// if(n<2)
// {
//   result=n;
// }
// for(let i=2;i<=n;i++)
// {
// result=n1+n2;
// n1=n2;
// n2=result;
// }
// console.log(result);

let fibo;
let n=50;
fibo=1/(Math.pow(5,1/2)*Math.pow(2,n))*(Math.pow((1+Math.pow(5,1/2)),n)-Math.pow((1-Math.pow(5,1/2)),n));
console.log(parseInt(fibo));