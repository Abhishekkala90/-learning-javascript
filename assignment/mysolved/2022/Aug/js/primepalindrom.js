// Q1.Prime Number

let numb=1;
let test=1;
for(let i=2;i<numb;i++)
{
    test=test*numb%i;
}if(test!=0 && numb!=1)
{
    console.log('Given number ',numb, ' is prime.')
}
else if(test==0)
{
    console.log('Given number  ' ,numb, ' is composite.')
}
else{
}
console.log(numb,' is neither composite nor prime.')



// Q2.Prime palindrome under 50

// for(let i=2;i<=50;i++)
// {   
//     let test=1;
//     let reverse=0;
//     let remainder=0;
//     for(let n=i ;n!=0;n=parseInt(n/10))
//     {
//     remainder=n%10;
//     reverse=reverse*10+remainder;
// }if(i==reverse)
// {
// for(let j=2;j<i;j++)
// {
//     test=test*i%j;
// }if(test!=0 && i!=1)
// {
//     console.log(i);
// }
// }
// }

