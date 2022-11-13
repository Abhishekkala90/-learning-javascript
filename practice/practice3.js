// Q.Is prime or not
// function isprime(p)
// {
//     for(let i=2;i<p;i++)
//     {
//         if(p%i==0)
//         {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(75));



// Q.1 Given a number A which is even,you need to print prime numbers whose sum will be equal to A.

// constraint A>2.
// function isprime(p)
// {
//     for(let i=2;i<p;i++)
//     {
//         if(p%i==0)
//         {
//             return false;
//         }
//     }
//     return true;
// }
// function sumofprime(A)
// {
//     i=2;
//     while(true)
//     {
//         let anotherprime=(A-i);
//         if(isprime(i) && isprime(anotherprime)){
//         console.log(`The prime numbers are ${i} and ${anotherprime}`)
//         return;
//         }
//         i++;
//     }
// }
// sumofprime(91);

// Q2.Sum of inner digits.
// function innerdigits(numb){
//     let r=0;
//     let sum=0;
//     let numb1=0;
//     numb1=parseInt(numb/10);
//     while(numb1>9)
//     {
//         r=numb1%10;
//         sum+=r;
//         numb1=parseInt(numb1/10)
//     }console.log(sum);
//     return;
// }
// innerdigits(6000010010025);

// Q3.Given two numbers find if they are of opposite sign or not.
function check(a,b){
if((a<0 && b>0) || (a>0 && b<0))
return true;
else
return false;
}
console.log(check(-67,-87));