//Fibonacci problem using recursion
// function fib(n)
// {
//     if(n==1 || n==0)
//     return n;
//     return fib(n-1)+fib(n-2);
// }
// console.log(fib(100));
 function fibo(n)
{
    
      BigInt(n1=0);
      BigInt(n2=1);
      BigInt(n3);
 
for(let i=0;i<n;i++)
{
   
    n3=n1+n2;
    n1=n2
    n2=n3;
}
return n1;
}
console.log(fibo(79));
14472334024676221